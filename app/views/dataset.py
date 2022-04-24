from app import db_datasets, app
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

## datasets
@app.route('/dataset/getall')
def getdatasets():
  datasets_cursor = db_datasets.find()
  datasets_list = list(datasets_cursor)
  datasets_json = dumps(datasets_list)
  return datasets_json
