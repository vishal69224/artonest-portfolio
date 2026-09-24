from fastapi import APIRouter

api_router = APIRouter()

# Placeholder routers for later phases:
# from app.api import projects, inquiries, admin
# api_router.include_router(projects.router, prefix="/projects", tags=["projects"])
# api_router.include_router(inquiries.router, prefix="/inquiries", tags=["inquiries"])
# api_router.include_router(admin.router, prefix="/admin", tags=["admin"])


@api_router.get("/")
def api_root() -> dict[str, str]:
    return {"message": "Portfolio Platform API v1"}
