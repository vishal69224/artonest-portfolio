"""
Database session configuration.

Tables and migrations are intentionally deferred to later phases.
This module only establishes the SQLAlchemy engine/session structure.
"""

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, declarative_base, sessionmaker

from app.core.config import get_settings

settings = get_settings()

engine = create_engine(
    settings.database_url,
    pool_pre_ping=True,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db() -> Generator[Session, None, None]:
    """Yield a database session. Not wired to routes yet."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
