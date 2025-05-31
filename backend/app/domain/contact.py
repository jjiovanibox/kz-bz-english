from pydantic import BaseModel, Field
from datetime import datetime, timezone

class ContactModel(BaseModel):
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))  # 現在時刻をUTCで設定

def send_email(self):
    # メール送信のロジックをここに実装
    print(f"Sending email to {self.email}...")
    # 実際のメール送信処理を追加する場合は、ここに記述します。