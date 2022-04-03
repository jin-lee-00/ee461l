from flask import Flask
from app import app # import Flask instance from app.py
from user.models import User


@app.route('/user/signup', methods=["GET"])
def signup():
  return User().signup()
