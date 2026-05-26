from models.report_model import Report
from extensions import db


def create_report(data):

    report = Report(

        title=data.get("title"),

        summary=data.get("summary"),

        market_analysis=data.get(
            "market_analysis"
        ),

        competitor_analysis=data.get(
            "competitor_analysis"
        )
    )

    db.session.add(report)

    db.session.commit()

    return report