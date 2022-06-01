
import os
import logging
import boto3
from botocore.client import Config
from botocore.exceptions import ClientError
from src.config import aerothon_config

s3_signature ={
    'v4':'s3v4',
    'v2':'s3'
}

AWS_ACCESS_KEY_ID = aerothon_config.ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = aerothon_config.SECRET_KEY
AWS_DEFAULT_REGION = aerothon_config.AWS_DEFAULT_REGION

def create_presigned_url(bucket_name, bucket_key, expiration=3600, signature_version=s3_signature['v4']):
    """Generate a presigned URL for the S3 object
    :param bucket_name: string
    :param bucket_key: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :param signature_version: string
    :return: Presigned URL as string. If error, returns None.
    """
    s3_client = boto3.client('s3',
                             aws_access_key_id=AWS_ACCESS_KEY_ID,
                             aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
                             config=Config(signature_version=signature_version),
                             region_name=AWS_DEFAULT_REGION
                             )
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': bucket_key},
                                                    ExpiresIn=expiration)
        print(s3_client.list_buckets()['Owner'])
        for key in s3_client.list_objects(Bucket=bucket_name, Prefix=bucket_key)['Contents']:
            print(key['Key'])
    except ClientError as e:
        logging.error(e)
        return None
    # The response contains the presigned URL
    return {"url" : response}

