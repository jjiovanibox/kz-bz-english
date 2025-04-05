from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from app.interface.routes import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ここで許可するオリジンを指定
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルートを登録
app.include_router(router)

@app.get("/")
def read_root():
    print("Root endpoint accessed")
    return {"message": "Welcome to the API!"}

if (__name__) == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8080, reload=True)