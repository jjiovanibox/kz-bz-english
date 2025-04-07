from pydantic import BaseModel

class ContactModel(BaseModel):
    name: str
    email: str
    message: str

    # 新しい構文での設定
    model_config = {
        "json_encoders": {str: lambda v: v.strip()},  # 必要に応じて設定
    }