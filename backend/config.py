import os
from dotenv import load_dotenv
load_dotenv()
class Config:
    OPENAI_API_KEY=os.getenv("OPENAI_API_KEY")
    SQLALCHEMY_DATABASE_URI = "sqlite:////app/data/startup_ai.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    LANGFUSE_PUBLIC_KEY = os.getenv("LANGFUSE_PUBLIC_KEY")
    LANGFUSE_SECRET_KEY = os.getenv("LANGFUSE_SECRET_KEY")
    LANGFUSE_BASE_URL = os.getenv("LANGFUSE_BASE_URL")
