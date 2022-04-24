from app import db_resources, app
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