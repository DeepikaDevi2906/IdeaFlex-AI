from flask import Blueprint, request, jsonify

from services.file_service import save_file

from services.openai_service import generate_response

from services.rag_service import (
    process_pdf,
    retrieve_context
)

from models.report_model import Report

from extensions import db


upload_bp = Blueprint(

    "upload_bp",

    __name__
)


# ===================================
# UPLOAD + STARTUP ANALYSIS
# ===================================

@upload_bp.route(

    "/upload",

    methods=["POST"]
)

def upload_file():

    # ===================================
    # VALIDATION
    # ===================================

    if "file" not in request.files:

        return jsonify({

            "error":
            "No file part in request"

        }), 400


    file = request.files["file"]


    if file.filename == "":

        return jsonify({

            "error":
            "No selected file"

        }), 400


    # ===================================
    # SAVE FILE
    # ===================================

    file_path = save_file(file)


    # ===================================
    # PROCESS PDF USING RAG
    # ===================================

    process_pdf(file_path)


    # ===================================
    # RETRIEVE CONTEXT
    # ===================================

    context = retrieve_context(

        "Analyze this startup idea"
    )


    # ===================================
    # PROMPT
    # ===================================

    prompt = f"""

    You are an expert startup evaluator,
    investor analyst,
    and startup consultant.

    Analyze this startup idea honestly.

    Startup Context:
    {context}

    Generate:

    # Startup Summary

    Explain the startup idea clearly.

    # Problem Validation

    Is this solving a real problem?

    # Market Potential

    Is there strong market opportunity?

    # Strengths

    What makes this startup promising?

    # Weaknesses

    What are the biggest risks or flaws?

    # Competitor Threat

    Can competitors easily copy this?

    # Monetization Potential

    Can this startup become profitable?

    # Scalability

    Can this scale globally?

    # MVP Feasibility

    How difficult is the MVP to build?

    # Investor Attractiveness

    Would investors likely fund this startup?

    # Final Verdict

    Is this startup idea strong,
    average,
    or weak?

    Explain honestly.

    Give practical startup feedback
    like a real VC firm.

    """


    # ===================================
    # GENERATE RESPONSE
    # ===================================

    response = generate_response(

        user_id="upload-user",

        query=prompt
    )


    # ===================================
    # SAVE REPORT
    # ===================================

    report = Report(

        title=file.filename,

        summary="AI Startup Analysis Report",

        full_report=response
    )

    db.session.add(report)

    db.session.commit()


    # ===================================
    # RETURN RESPONSE
    # ===================================

    return jsonify({

        "message":
        "File uploaded and analyzed successfully",

        "analysis":
        response,

        "file_path":
        file_path
    })