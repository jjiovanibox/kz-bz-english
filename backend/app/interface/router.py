from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.usecase.contact import ContactUseCase

router = APIRouter()

@router.post("/api/contact")
def submit_contact_form(contact):
    # ここでデータを保存したり、メール送信処理を行う
    print(f"Received contact form: {contact}")
    ContactUseCase(contact).execute()

    return {"message": "お問い合わせを受け付けました！"}

@router.get("/")
def read_root():
    print("Root endpoint accessed")
    return {"message": "Welcome to the API!"}