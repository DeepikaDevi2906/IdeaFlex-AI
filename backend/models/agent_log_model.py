from extensions import db

class AgentLog(db.Model):
    __tablename__ = "agent_logs"

    id = db.Column(db.Integer, primary_key=True)
    agent_name = db.Column(db.String(100))
    action = db.Column(db.Text)
    status = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, server_default=db.func.now())