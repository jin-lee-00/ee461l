from flask import Flask, jsonify, redirect, request, session
from app import db
import uuid
import hashlib

class User:
    def start_session(self, user):
        session["logged_in"] = True
        session["user"] = user
        return jsonify(user)

    def register(self):
        print(request.form)
        # create object
        user = {
            "_id": uuid.uuid4().hex,
            "userID": request.form.get("userID"),
            "email": request.form.get("email"),
            "password": request.form.get("password") 
        }
        # check existing user
        if db.users.find_one({ "userID": user["userID"]}):
            return jsonify({ "error": "User ID already in use"}), 400
        
        # check existing email
        if db.users.find_one({ "email": user["email"]}):
            return jsonify({ "error": "Email already in use"}), 400
        
        # encryption
        user["password"] = hashlib.sha256(user["password"].encode())

        # add new user to user database and start session
        if db.users.insert_one(user):
            return self.start_session(user)
        else:
            return jsonify({"error": "Signup failed" })

    def logoff(self):
        session.clear()
        return redirect("/")