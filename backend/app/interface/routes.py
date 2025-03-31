from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# 問い合わせデータのスキーマ
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@router.post("/api/contact")
def submit_contact_form(contact: ContactForm):
    # ここでデータを保存したり、メール送信処理を行う
    print(f"Received contact form: {contact}")
    return {"message": "お問い合わせを受け付けました！"}