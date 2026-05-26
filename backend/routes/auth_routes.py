from flask import Blueprint
from flask import request
from flask import jsonify

from flask_jwt_extended import (

    jwt_required
)

from services.auth_service import (

    register_user,

    login_user,

    logout_user
)

auth_bp = Blueprint(

    "auth_bp",

    __name__
)


# ====================================
# REGISTER
# ====================================

@auth_bp.route(

    "/register",

    methods=["POST"]
)

def register():

    data = request.json

    name = data.get("name")

    email = data.get("email")

    password = data.get("password")


    response, status_code = register_user(

        name,

        email,

        password
    )

    return jsonify(response), status_code


# ====================================
# LOGIN
# ====================================

@auth_bp.route(

    "/login",

    methods=["POST"]
)

def login():

    data = request.json

    email = data.get("email")

    password = data.get("password")


    response, status_code = login_user(

        email,

        password
    )

    return jsonify(response), status_code


# ====================================
# LOGOUT
# ====================================

@auth_bp.route(

    "/logout",

    methods=["POST"]
)

@jwt_required()

def logout():

    response, status_code = logout_user()

    return jsonify(response), status_code