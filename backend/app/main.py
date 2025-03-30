from fastapi import FastAPI
from app.api.routes import router

app = FastAPI()

# ルートを登録
app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the API!"}