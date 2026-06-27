from flask import Blueprint, request, jsonify

from services.report_service import create_report

from models.report_model import Report

from extensions import db


report_bp = Blueprint(

    "report_bp",

    __name__
)


# ===================================
# CREATE REPORT
# ===================================

@report_bp.route(

    "/create-report",

    methods=["POST"]
)

def create_report_route():

    data = request.get_json()

    report = create_report(data)

    return jsonify({

        "message":
        "Report created successfully",

        "report_id":
        report.id,

        "title":
        report.title
    })


# ===================================
# GET ALL REPORTS
# ===================================

@report_bp.route(

    "/reports",

    methods=["GET"]
)

def get_reports():

    reports = Report.query.order_by(

        Report.created_at.desc()

    ).all()


    data = []


    for report in reports:

        data.append({

            "id":
            report.id,

            "title":
            report.title,

            "summary":
            report.summary,

            "market_analysis":
            report.market_analysis,

            "competitor_analysis":
            report.competitor_analysis,

            "full_report":
            report.full_report,

            "created_at":
            report.created_at.strftime(
                "%Y-%m-%d %H:%M:%S"
            )
        })


    return jsonify(data)


# ===================================
# GET SINGLE REPORT
# ===================================

@report_bp.route(

    "/reports/<int:report_id>",

    methods=["GET"]
)

def get_single_report(report_id):

    report = Report.query.get(report_id)


    if not report:

        return jsonify({

            "error":
            "Report not found"

        }), 404


    return jsonify({

        "id":
        report.id,

        "title":
        report.title,

        "summary":
        report.summary,

        "market_analysis":
        report.market_analysis,

        "competitor_analysis":
        report.competitor_analysis,

        "full_report":
        report.full_report,

        "created_at":
        report.created_at.strftime(
            "%Y-%m-%d %H:%M:%S"
        )
    })


# ===================================
# DELETE REPORT
# ===================================

@report_bp.route(

    "/reports/<int:report_id>",

    methods=["DELETE"]
)

def delete_report(report_id):

    report = Report.query.get(report_id)


    if not report:

        return jsonify({

            "error":
            "Report not found"

        }), 404


    db.session.delete(report)

    db.session.commit()


    return jsonify({

        "message":
        "Report deleted successfully"
    })