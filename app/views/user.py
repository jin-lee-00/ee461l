from app import db_users, app, client, ACCESS_EXPIRES
from flask import jsonify, request, json
from passlib.hash import pbkdf2_sha256

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity 
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt
#from flask_jwt_extended import jwt_redis_blocklist

## users 
@app.route('/user/signup', methods=["GET", "POST"])
def signup():
  request_data = json.loads(request.data)
  response = request_data
  email = request_data['email']
  name = request_data['name']
  password = request_data['password']
  user = db_users.find({},{ "email": email})
  # Check user is not in db_users (user does not exist)
  email_cursor = db_users.find_one({"email": email})
  if email_cursor == None:
  # Add user to db_users
    db_users.insert_one(
        { "name": name,
          "email": email,
          "password": pbkdf2_sha256.hash(password),
        }
    )
    # append the status to
    response["status"] = 200
    return response
  else:
    # user already exists
    #todo: output error
    response["status"] = 400
    return response

@app.route('/user/signin', methods=["POST"])
def signin():
  request_data = json.loads(request.data)
  response = request_data
  email = request_data['email']
  password = request_data['password']
  user = db_users.find({},{ "email": email})
  # Check user is in db_users
  email_cursor = db_users.find_one({"email": email})
  if email_cursor != None:
    # TODO: Authenticate (jwt, session(s) from flask)
    # check if passwords match
    if pbkdf2_sha256.verify(password, email_cursor["password"]):
      response["status"] = 200
      return response
    else:
      response["status"] = 401
      return response
  else:
    response["status"] = 400
    return response

# authentication
@app.route("/token", methods=[ "POST"])
def tokencreate():
    request_data = json.loads(request.data)
    email = request_data['email']
    email_cursor = db_users.find_one({"email": email})
    tempname = email_cursor["name"]
    access_token = create_access_token(identity=tempname)
    response = request_data
    response["name"] = tempname
    response["token"] = access_token
    response["status"] = 200
    return response

@app.route("/protected", methods=["POST"])
@jwt_required()
def protected():
    #identity=name
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
# 
# ## logout
# @app.route('/logout', methods=['DELETE'])
# @jwt_required()
# def logout():
#   client.close()
#   jti = get_jwt()["jti"]
#  jwt_redis_blocklist.set(jti, "", ex=ACCESS_EXPIRES)
#  return jsonify(msg="Access token revoked")


@app.route('/hello')
def hello():
    return 'Hello, World!'

@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    return jsonify({'sum': data['a'] + data['b']})