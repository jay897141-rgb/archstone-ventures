"""
Lead storage for the enquiry endpoint.

Behaviour:
- If MONGODB_URI is set, enquiries are persisted to MongoDB via motor
  (async driver), in a collection named by MONGODB_COLLECTION.
- If MONGODB_URI is NOT set, the app runs in an explicit in-memory
  dev-mode fallback: enquiries are held in a process-local list only,
  and every response is honest about this (persisted=False). Nothing
  is silently dropped, and nothing pretends to be durably stored.

This keeps the frontend buildable/testable even before MongoDB
credentials exist, per the brief: "If MongoDB credentials are not
available, do not block the frontend build. Provide a safe
fallback/development mode without pretending data is persisted."
"""

import logging
import os
import uuid
from typing import Any, Optional

logger = logging.getLogger("archstone.db")

MONGODB_URI = os.getenv("MONGODB_URI")
MONGODB_DB = os.getenv("MONGODB_DB", "archstone")
MONGODB_COLLECTION = os.getenv("MONGODB_COLLECTION", "enquiries")

_mongo_client = None
_collection = None
_dev_store: list[dict[str, Any]] = []


def is_persistent() -> bool:
    return _collection is not None


async def init_db() -> None:
    """Called once on startup. Connects to MongoDB if configured; otherwise
    logs a clear warning and stays in in-memory dev mode."""
    global _mongo_client, _collection

    if not MONGODB_URI:
        logger.warning(
            "MONGODB_URI is not set — running in DEV MODE. "
            "Enquiries will be held in memory only and lost on restart."
        )
        return

    try:
        from motor.motor_asyncio import AsyncIOMotorClient

        _mongo_client = AsyncIOMotorClient(MONGODB_URI, serverSelectionTimeoutMS=4000)
        # Fail fast if the URI is unreachable, rather than pretending to be connected.
        await _mongo_client.admin.command("ping")
        _collection = _mongo_client[MONGODB_DB][MONGODB_COLLECTION]
        logger.info("Connected to MongoDB — enquiries will be persisted.")
    except Exception as exc:  # noqa: BLE001 — deliberately broad: any failure -> dev mode
        logger.warning(
            "Could not connect to MongoDB (%s). Falling back to DEV MODE — "
            "enquiries will NOT be persisted.",
            exc,
        )
        _mongo_client = None
        _collection = None


async def close_db() -> None:
    if _mongo_client is not None:
        _mongo_client.close()


async def save_enquiry(record: dict[str, Any]) -> tuple[str, bool]:
    """Stores an enquiry. Returns (id, persisted)."""
    record_id = str(uuid.uuid4())
    record = {"_id": record_id, **record}

    if _collection is not None:
        await _collection.insert_one(dict(record))
        return record_id, True

    _dev_store.append(record)
    return record_id, False


def dev_store_snapshot() -> list[dict[str, Any]]:
    """Dev-only helper so /api/enquiries (GET) can show what's been
    captured when there is no database configured."""
    return list(_dev_store)
