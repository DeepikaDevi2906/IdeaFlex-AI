from models.user_model import User

from extensions import db

from flask_bcrypt import Bcrypt

from flask_jwt_extended import (
    create_access_token
)

bcrypt = Bcrypt()


# ====================================
# REGISTER USER
# ====================================

def register_user(

    name,

    email,

    password
):

    existing_user = User.query.filter_by(

        email=email

    ).first()

    if existing_user:

        return {

            "error": "Email already exists"

        }, 400


    hashed_password = bcrypt.generate_password_hash(

        password

    ).decode("utf-8")


    new_user = User(

        username=name,

        email=email,

        password=hashed_password
    )

    db.session.add(new_user)

    db.session.commit()


    return {

        "message": "User registered successfully"

    }, 201


# ====================================
# LOGIN USER
# ====================================

def login_user(

    email,

    password
):

    user = User.query.filter_by(

        email=email

    ).first()


    if not user:

        return {

            "error": "Invalid email or password"

        }, 401


    valid_password = bcrypt.check_password_hash(

        user.password,

        password
    )


    if not valid_password:

        return {

            "error": "Invalid email or password"

        }, 401


    access_token = create_access_token(

        identity=str(user.id)
    )


    return {

        "token": access_token,

        "user": {

            "id": user.id,

            "name": user.username,

            "email": user.email
        }

    }, 200

def logout_user():

    return {

        "message": "Logout successful"

    }, 200