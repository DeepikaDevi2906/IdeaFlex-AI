from extensions import db

class Workflow(db.Model):
    __tablename__ = "workflows"

    id = db.Column(db.Integer, primary_key=True)
    startup_id = db.Column(db.Integer, db.ForeignKey("startups.id"))
    status = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, server_default=db.func.now())