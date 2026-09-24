from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    app_name: str = "Portfolio Platform API"
    app_env: str = "development"
    debug: bool = True
    api_prefix: str = "/api/v1"

    # Comma-separated origins for local frontend development
    cors_origins: str = "http://localhost:3000,http://127.0.0.1:3000"

    # PostgreSQL — connection not used until later phases
    database_url: str = "postgresql://postgres:postgres@localhost:5432/portfolio"

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
