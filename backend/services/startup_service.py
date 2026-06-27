from models.startup_model import Startup
from extensions import db

def create_startup(data):
    startup = Startup(
        startup_name=data.get("startup_name"),
        idea=data.get("idea"),
        industry=data.get("industry"),
        target_audience=data.get("target_audience")
    )
    db.session.add(startup)
    db.session.commit()
    return startup