import boto3
from botocore.exceptions import ClientError
from botocore.config import Config
from common_repository import dynamodb

TABLE_NAME = 't_contact'
dynamo_client = boto3.client('dynamodb')
table = dynamo_client.Table(TABLE_NAME)

dynamodb = dynamodb(TABLE_NAME)
dynamodb.put_item()

def save(contact):
    try:
        item = {
            'contactId': {'S': contact.contactId},
            'name': {'S': contact.name},
            'email': {'S': contact.email},
            'message': {'S': contact.message},
        }
        dynamodb.put_item(item)
    except ClientError as e:
        print(f"Error saving contact: {e.response['Error']['Message']}")
    else:
        print("Contact saved successfully.")
        'TableName': self.TABLE_NAME,
        'Item': item,
        }
        print("Contact saved successfully.")
        return True
    except ClientError as e:
        print(f"Error saving contact: {e.response['Error']['Message']}")
        return False