from app.domain.contact import ContactModel
from app.infrastructure.t_contact_repository import t_contact_repository

def validate(contact: ContactModel):
    # バリデーションを実行
    if not contact.name or not contact.email or not contact.message:
        raise ValueError("全てのフィールドを入力してください。")
    if "@" not in contact.email:
        raise ValueError("有効なメールアドレスを入力してください。")
    return True

def execute(contact: ContactModel):
    # ビジネスロジックを実行

    # バリデーションを実行
    print("validating contact...")
    validate(contact)

    # データベースに保存
    print(f"Saving contact: {contact}")
    t_contact_repository.save(contact)

    # メールを送信
    print("Sending email...")
    contact.send_email()