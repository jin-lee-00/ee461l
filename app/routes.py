from app import db_projects, db_datasets, db_resources, db_users, app
from hashlib import new
from flask import Flask, jsonify, request, json, redirect
# from flask_cors import CORS
import pymongo
from bson.json_util import dumps
from flask.helpers import send_from_directory
import os
from passlib.hash import pbkdf2_sha256

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
'''
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
    response["token"] = access_token
    response["status"] = 200
    return response

@app.route("/protected", methods=["POST"])
@jwt_required()
def protected():
    #identity=email
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

## logout
# @app.route('/logout', methods=['GET'])
# @jwt_required()
# def logout():
#   client.close()
#   jti = get_jwt()["jti"]
#   jwt_redis_blocklist.set(jti, "", ex=ACCESS_EXPIRES)
#   return jsonify(msg="Access token revoked")

## projects
@app.route('/project/add', methods=['POST'])
@jwt_required()
def addproject():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  name = request_data["name"]
  desc = request_data["desc"]
  resources = request_data["resources"] # Init checked out HWSets 1, 2 to 0
  db_projects.insert_one({
    "_id": _id,
    "name": name,
    "desc": desc,
    "resources": resources,
    "users": []
  })
  return request_data

@app.route('/project/delete', methods=['POST'])
def deleteproject():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  db_projects.delete_one({"_id":_id})
  return request_data

@app.route('/project/get/<_id>')
def getproject(_id):
  #request_data = json.loads(request_data)
  #_id = request_data["_id"]
  print(_id)
  project_cursor = db_projects.find_one({"_id":int(_id)})
  print(project_cursor)
  project_json = dumps(project_cursor)
  return project_json

@app.route('/project/getall')
def getprojects():
  projects_cursor = db_projects.find()
  projects_list = list(projects_cursor)
  projects_json = dumps(projects_list)
  return projects_json

@app.route('/project/join/<_id>', methods=['GET', 'POST'])
@jwt_required()
def joinproject(_id):
  project_cursor = db_projects.find_one({"_id":int(_id)})
  current_user = get_jwt_identity()
  users = list(project_cursor["users"])
  users.append(current_user)
  print(users)
  db_projects.update_one({'_id': int(_id)}, {'$set': {'users': users}}, upsert=True)
  project_cursor = db_projects.find_one({"_id":int(_id)})
  project_json = dumps(project_cursor)
  return project_json

# Manage resources
@app.route('/project/<_id>/checkout/<resource_name>/<qty>')
def checkOut(_id, resource_name, qty):
  print(resource_name,qty)
  resource_cursor = db_resources.find_one({"name":resource_name})
  resource_query = {"name":resource_name}
  project_cursor = db_projects.find_one({"_id":int(_id)})
  current_checkedOutQty = project_cursor["resources"][resource_name]
  project_query = {"_id":int(_id)}
  
  if(resource_cursor["availability"] >= int(qty)):
    newQty = resource_cursor["availability"] - int(qty)
    updated_availability = {"$set": {"availability": newQty}}
    updated_checkedOutQty = current_checkedOutQty + int(qty)
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 200
  else: # availability < qty
    newQty = 0
    updated_checkedOutQty = current_checkedOutQty + resource_cursor["availability"]
    updated_availability = {"$set": {"availability": newQty}}
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 400 # return error

@app.route('/project/<_id>/checkin/<resource_name>/<qty>')
def checkIn(_id, resource_name, qty):
  print(resource_name,qty)
  resource_cursor = db_resources.find_one({"name":resource_name})
  resource_query = {"name":resource_name}
  project_cursor = db_projects.find_one({"_id":int(_id)})
  current_checkedOutQty = project_cursor["resources"][resource_name]
  project_query = {"_id":int(_id)}
  
  if(current_checkedOutQty >= int(qty)):
    newQty = resource_cursor["availability"] + int(qty)
    updated_availability = {"$set": {"availability": newQty}}
    updated_checkedOutQty = current_checkedOutQty - int(qty)
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 200
  else: # checkedOut < qty
    newQty = current_checkedOutQty + resource_cursor["availability"]
    updated_checkedOutQty = 0
    updated_availability = {"$set": {"availability": newQty}}
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 400 # return error
  

## resources
@app.route('/resource/add', methods=['POST'])
def addresource():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  name = request_data["name"]
  capacity = int(request_data["capacity"])
  availability = capacity
  checkout = {} # store checkout as [user:qty] key:value pair
  db_resources.insert_one({
    "_id": _id,
    "name": name,
    "capacity": capacity,
    "availability": availability,
    "checkout": checkout
  }) 
  return request_data

@app.route('/resource/delete', methods=['POST'])
def deleteresource():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  db_resources.delete_one({"_id": _id})
  return request_data

@app.route('/resource/getall')
def getresources():
  resources_cursor = db_resources.find()
  resources_list = list(resources_cursor)
  resources_json = dumps(resources_list)
  return resources_json

## datasets
@app.route('/dataset/getall')
def getdatasets():
  datasets_cursor = db_datasets.find()
  datasets_list = list(datasets_cursor)
  datasets_json = dumps(datasets_list)
  return datasets_json
'''
# main
@app.route("/")
def home():
    # return send_from_directory(app.static_folder, "index.html")
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')