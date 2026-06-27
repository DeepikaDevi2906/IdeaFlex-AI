from langfuse import Langfuse
from config import Config

langfuse = Langfuse(
    public_key=Config.LANGFUSE_PUBLIC_KEY,
    secret_key=Config.LANGFUSE_SECRET_KEY,
    host=Config.LANGFUSE_BASE_URL,
)