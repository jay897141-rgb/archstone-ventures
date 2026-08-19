"""
Archstone Ventures — lead/enquiry backend.

Deliberately minimal, per the brief: Python FastAPI only, no Node/Express
business API. From inside the backend/ directory, run:

    uvicorn app.main:app --reload --port 8000

See the root README.md for full setup instructions.
"""

import logging
import os
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .db import close_db, dev_store_snapshot, init_db, is_persistent, save_enquiry
from .models import EnquiryOut, EnquiryIn, now_utc

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("archstone.main")

ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
    if origin.strip()
]


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield
    await close_db()


app = FastAPI(
    title="Archstone Ventures — Enquiry API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    return {"status": "ok", "persisted_storage": is_persistent()}


@app.post("/api/enquiries", response_model=EnquiryOut, status_code=201)
async def create_enquiry(payload: EnquiryIn):
    record = payload.model_dump()
    record["created_at"] = now_utc()

    try:
        enquiry_id, persisted = await save_enquiry(record)
    except Exception as exc:  # noqa: BLE001
        logger.exception("Failed to save enquiry")
        raise HTTPException(status_code=500, detail="Could not save enquiry.") from exc

    if not persisted:
        logger.warning(
            "Enquiry %s captured in DEV MODE (no database configured) — "
            "not durably stored.",
            enquiry_id,
        )

    return EnquiryOut(
        id=enquiry_id,
        name=payload.name,
        requirement_type=payload.requirement_type,
        created_at=record["created_at"],
        persisted=persisted,
    )


@app.get("/api/enquiries/_dev-snapshot")
async def dev_snapshot():
    """Dev-only visibility into in-memory enquiries when no database is
    configured. Returns 404 once real persistence is connected, so this
    can never leak stored leads in production."""
    if is_persistent():
        raise HTTPException(status_code=404, detail="Not available — persistent storage is configured.")
    return {"count": len(dev_store_snapshot()), "enquiries": dev_store_snapshot()}
