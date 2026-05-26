from flask import Flask
from flask_cors import CORS

from config import Config

from extensions import (
    db,
    bcrypt,
    jwt
)

# ====================================
# MODELS
# ====================================

from models.user_model import User

from models.startup_model import Startup

from models.report_model import Report

from models.upload_model import Upload

from models.chat_model import Chat

from models.workflow_model import Workflow

from models.agent_log_model import AgentLog


# ====================================
# ROUTES
# ====================================

from routes.chat_routes import (
    chat_bp
)

from routes.startup_routes import (
    startup_bp
)

from routes.report_routes import (
    report_bp
)

from routes.upload_routes import (
    upload_bp
)

from routes.workflow_routes import (
    workflow_bp
)

from routes.auth_routes import (
    auth_bp
)


# ====================================
# APP
# ====================================

app = Flask(__name__)

app.config.from_object(Config)

app.config["JWT_SECRET_KEY"] = (
    "super-secret-key"
)

CORS(app)


# ====================================
# INIT EXTENSIONS
# ====================================

db.init_app(app)

bcrypt.init_app(app)

jwt.init_app(app)


# ====================================
# REGISTER BLUEPRINTS
# ====================================

app.register_blueprint(chat_bp)

app.register_blueprint(startup_bp)

app.register_blueprint(report_bp)

app.register_blueprint(upload_bp)

app.register_blueprint(workflow_bp)

app.register_blueprint(auth_bp)


# ====================================
# HOME ROUTE
# ====================================

@app.route("/")
def home():

    return {

        "message":
        "AI Autonomous Startup Builder Backend Running"
    }


# ====================================
# MAIN
# ====================================

if __name__ == "__main__":

    with app.app_context():

        db.create_all()

    app.run(debug=True)