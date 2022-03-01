from flask import Flask
from app import app
from user.models import User

@app.route("/user/register", methods=["POST"])
def register():
    return User().register()

@app.route("/user/logoff")
def signout():
    return User().logoff()