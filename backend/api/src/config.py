# To configure database
import os
from dotenv import load_dotenv

from pathlib import Path
env_path = Path('.')/'.env'
load_dotenv(dotenv_path=env_path)

class project_config:
    # To name the project
    PROJECT_NAME: str = "Aerothon"
    PROJECT_VERSION: str = "4.0.0"
    
    ACCESS_KEY_ID : str = os.getenv("ACCESS_KEY_ID")
    SECRET_KEY = os.getenv("SECRET_KEY")
    AWS_DEFAULT_REGION = os.getenv("AWS_DEFAULT_REGION")

aerothon_config = project_config()