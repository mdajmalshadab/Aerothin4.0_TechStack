from fastapi import FastAPI, status
from src.config import aerothon_config
from fastapi.middleware.cors import CORSMiddleware
from src.creates3url import create_presigned_url
from mangum import Mangum

app = FastAPI(title=aerothon_config.PROJECT_NAME, version=aerothon_config.PROJECT_VERSION)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", status_code=status.HTTP_200_OK)
def files(feTitle:str, beTitle:str):
    bucket_name = "aerothon4.0"
    object_name = f"{feTitle.lower()}-{beTitle.lower()}.zip"
    return create_presigned_url(bucket_name, object_name)
        
handler = Mangum(app=app)