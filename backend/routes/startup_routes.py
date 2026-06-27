from flask import Blueprint,request,jsonify
from services.startup_service import create_startup

startup_bp=Blueprint("startup_bp",__name__)

@startup_bp.route("/create-startup",methods=["POST"])
def create_startup_route():
    data=request.get_json()
    startup=create_startup(data)
    return jsonify({
        "message": "Startup created successfully",
        "startup_name": startup.startup_name
    })