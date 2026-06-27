from extensions import db

class Upload(db.Model):
    __tablename__ = "uploads"

    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(255))
    filepath = db.Column(db.String(500))
    uploaded_at = db.Column(db.DateTime, server_default=db.func.now())