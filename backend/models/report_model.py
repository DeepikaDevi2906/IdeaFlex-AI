from extensions import db
from datetime import datetime

class Report(db.Model):
    __tablename__ = "reports"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(255))

    summary = db.Column(db.Text)

    market_analysis = db.Column(
        db.Text,
        nullable=True
    )

    competitor_analysis = db.Column(
        db.Text,
        nullable=True
    )

    full_report = db.Column(db.Text)

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )