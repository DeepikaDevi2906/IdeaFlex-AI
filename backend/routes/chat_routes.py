from flask import Blueprint, request, jsonify

from flask_jwt_extended import (

    jwt_required,

    get_jwt_identity
)

from services.openai_service import (
    generate_response
)

chat_bp = Blueprint(

    "chat_bp",

    __name__
)


@chat_bp.route(

    "/chat",

    methods=["POST"]
)

@jwt_required()

def chat():

    data = request.get_json()

    prompt = data.get("prompt")


    # =================================
    # CURRENT LOGGED-IN USER
    # =================================

    user_id = get_jwt_identity()


    # =================================
    # GENERATE RESPONSE
    # =================================

    response = generate_response(

        user_id=user_id,

        query=prompt
    )


    return jsonify({

        "response": response
    })