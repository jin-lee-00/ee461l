from flask import Flask, jsonify, request, session, redirect
#from passlib.hash import pbkdf2_sha256
from app import db_users

class User:
  def start_session(self, user):
    del user['password']
    session['signed_in'] = True
    session['user'] = user
    return jsonify(user), 200 # success

  def signup(self):
    user = {
      "_id": "",
      "name": request.form.get('name'),
      "email": request.form.get('email'),
      "password": request.form.get('password')
    }

    #user['password'] = pbkdf2_sha256 # password encryption

    return jsonify(user), 200 # success
  def signout(self):
    session.clear()
    return redirect('/') #TODO redirect to signout