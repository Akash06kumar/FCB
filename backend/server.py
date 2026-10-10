from fastapi import FastAPI, APIRouter, HTTPException, UploadFile, File
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
from pathlib import Path
import requests
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator
from typing import List, Optional, Annotated
from datetime import datetime, timezone
from bson import ObjectId

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

STORAGE_BASE = (os.environ.get("INTEGRATION_PROXY_URL") or "").strip() or "https://integrations.emergentagent.com"
STORAGE_URL = STORAGE_BASE.rstrip("/") + "/objstore/api/v1/storage"
EMERGENT_KEY = os.environ.get("EMERGENT_LLM_KEY")
APP_NAME = "fcb-cake-wala"
storage_key = None


def init_storage(force: bool = False):
    global storage_key
    if storage_key and not force:
        return storage_key
    resp = requests.post(f"{STORAGE_URL}/init", json={"emergent_key": EMERGENT_KEY}, timeout=30)
    resp.raise_for_status()
    storage_key = resp.json()["storage_key"]
    return storage_key


def put_object(path: str, data: bytes, content_type: str) -> dict:
    key = init_storage()
    resp = requests.put(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key, "Content-Type": content_type},
        data=data,
        timeout=120,
    )
    if resp.status_code == 404:
        init_storage(force=True)
        return put_object(path, data, content_type)
    resp.raise_for_status()
    return resp.json()


def get_object(path: str) -> tuple:
    key = init_storage()
    resp = requests.get(f"{STORAGE_URL}/objects/{path}", headers={"X-Storage-Key": key}, timeout=60)
    resp.raise_for_status()
    return resp.content, resp.headers.get("Content-Type", "application/octet-stream")


PyObjectId = Annotated[str, BeforeValidator(str)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, arbitrary_types_allowed=True)

    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        doc = self.model_dump(by_alias=True, exclude_none=True)
        if "_id" in doc:
            doc["_id"] = ObjectId(doc["_id"])
        return doc

    @classmethod
    def from_mongo(cls, doc: dict):
        if doc is None:
            return None
        return cls(**doc)


class EnquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    phone: str = Field(min_length=8, max_length=20)
    cake_type: str
    weight: Optional[str] = None
    event_date: Optional[str] = None
    message: Optional[str] = Field(default=None, max_length=1000)
    photo_path: Optional[str] = None


class Enquiry(BaseDocument):
    name: str
    phone: str
    cake_type: str
    weight: Optional[str] = None
    event_date: Optional[str] = None
    message: Optional[str] = None
    photo_path: Optional[str] = None
    status: str = "new"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "FCB Cake Wala API", "status": "ok"}


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(input: EnquiryCreate):
    enquiry = Enquiry(**input.model_dump())
    await db.enquiries.insert_one(enquiry.to_mongo())
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    docs = await db.enquiries.find().sort("created_at", -1).to_list(200)
    return [Enquiry.from_mongo(d) for d in docs]


@api_router.post("/uploads")
async def upload_photo(file: UploadFile = File(...)):
    if not (file.content_type or "").startswith("image/"):
        raise HTTPException(status_code=400, detail="Only image files are allowed")
    data = await file.read()
    if len(data) > 8 * 1024 * 1024:
        raise HTTPException(status_code=400, detail="Image must be under 8 MB")
    ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else "jpg"
    path = f"{APP_NAME}/enquiries/{uuid.uuid4()}.{ext}"
    result = put_object(path, data, file.content_type)
    await db.files.insert_one({
        "storage_path": result["path"],
        "original_filename": file.filename,
        "content_type": file.content_type,
        "size": result["size"],
        "is_deleted": False,
        "created_at": datetime.now(timezone.utc).isoformat(),
    })
    return {"path": result["path"], "url": f"/api/files/{result['path']}"}


@api_router.get("/files/{path:path}")
async def serve_file(path: str):
    record = await db.files.find_one({"storage_path": path, "is_deleted": False})
    if not record:
        raise HTTPException(status_code=404, detail="File not found")
    data, content_type = get_object(path)
    return Response(content=data, media_type=record.get("content_type", content_type))


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup():
    try:
        init_storage()
        logger.info("Object storage initialized")
    except Exception as e:
        logger.error(f"Storage init failed: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
