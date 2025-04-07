import boto3
from botocore.exceptions import ClientError
from botocore.config import Config
import datetime
from datetime import timezone

class dynamodb:
    def __init__(self, table_name):
        self.TABLE_NAME = table_name
        self.dynamo_client = boto3.client('dynamodb', config=Config(retries={'max_attempts': 10}))
        self.dynamo_client = self.dynamo_client()
        self.table = self.dynamo_client.Table(self.TABLE_NAME)

    def scan(self):
        options = {
            'TableName': self.TABLE_NAME,
            'ProjectionExpression': '#todoId, #title',
            'ExpressionAttributeNames': {
                '#todoId': 'todoId',
                '#title': 'title',
            },
            'Limit': 1000,     # loopの実験用
        }

        ret = []
        while True:
            res = self.dynamo_client.scan(**options)
            ret += res.get('Items', [])
            if 'LastEvaluatedKey' not in res:
                break
            options['ExclusiveStartKey'] = res['LastEvaluatedKey']

        print(len(ret))
        print(ret)



    def put_item(self, item: dict):
        # now = int(datetime.now(timezone.utc).timestamp() * 1000)
        options = {
            'TableName': self.TABLE_NAME,
            'Item': item,
        }
        self.dynamo_client.put_item(**options)

    def get_item(self):
        options = {
            'TableName': self.TABLE_NAME,
            'Key': {
                'todoId': {'S': 't0001'},
            }
        }
        ret = self.dynamo_client.get_item(**options)

        print(ret['Item'])


    def update_item(self, item: dict):
        now = int(datetime.now(timezone.utc).timestamp() * 1000)
        options = {
            'TableName': self.TABLE_NAME,
            'Key': {
                'todoId': {'S': 't0001'},
            },
            'ConditionExpression': '#status = :unstarted',
            'UpdateExpression': 'set #updatedAt = :updatedAt, #status = :running, #title = :title',
            'ExpressionAttributeNames': {
                '#updatedAt': 'updatedAt',
                '#status': 'status',
                '#title': 'title',
            },
            'ExpressionAttributeValues': {
                ':updatedAt': {'N': str(now)},
                ':unstarted': {'S': 'unstarted'},
                ':running': {'S': 'running'},
                ':title': {'S': 'This is an apple.'},
            }
            # 'ConditionExpression': 'attribute_not_exists(todoId)',
        }
        self.dynamo_client.update_item(**options)


    def delete_item(self, item: dict):
        options = {
            'TableName': self.TABLE_NAME,
            'Key': {
                'todoId': {'S': 't0001'},
            }
        }
        self.dynamo_client.delete_item(**options)