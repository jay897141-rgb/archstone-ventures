from datetime import datetime, timezone
from typing import Optional

from pydantic import BaseModel, EmailStr, Field, field_validator

REQUIREMENT_TYPES = {"Property", "Construction", "Architecture", "Interiors", "Investment", "Other"}
CONTACT_METHODS = {"Phone", "Email", "WhatsApp"}


class EnquiryIn(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    phone: str = Field(..., min_length=6, max_length=20)
    email: EmailStr
    requirement_type: str = "Other"
    location: Optional[str] = Field(default=None, max_length=160)
    budget_range: Optional[str] = Field(default=None, max_length=80)
    message: Optional[str] = Field(default=None, max_length=2000)
    preferred_contact: str = "Phone"
    schedule_site_visit: bool = False
    consent: bool
    source: str = "website"

    @field_validator("requirement_type")
    @classmethod
    def validate_requirement_type(cls, v: str) -> str:
        return v if v in REQUIREMENT_TYPES else "Other"

    @field_validator("preferred_contact")
    @classmethod
    def validate_preferred_contact(cls, v: str) -> str:
        return v if v in CONTACT_METHODS else "Phone"

    @field_validator("consent")
    @classmethod
    def validate_consent(cls, v: bool) -> bool:
        if not v:
            raise ValueError("Consent is required before an enquiry can be submitted.")
        return v


class EnquiryOut(BaseModel):
    id: str
    name: str
    requirement_type: str
    created_at: datetime
    persisted: bool  # False in dev-mode fallback (no database configured)


def now_utc() -> datetime:
    return datetime.now(timezone.utc)
