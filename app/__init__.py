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

# from user.models import User

app = Flask(__name__, static_folder='../build', static_url_path='')
app.config["JWT_SECRET_KEY"] = "super-duper-secret"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = False # dangerous
jwt = JWTManager(app)
# 
# CORS(app)
app.secret_key = "temp_secret_key"

##########################################################################################
# DATABASE
##########################################################################################

_user = {
  "_id": 000000,
  "name": "test",
  "email": "test@test.com",
  "password": "test"
}

_project = {
  "_id":000000,
  "name":"test_desc",
  "desc":"test_desc",
  "resources": {}
}

_resources = [
  {
    "_id": 0,
    "name": "HWSet1",
    "capacity": 200,
    "availability": 200
  },
  {
    "_id": 1,
    "name": "HWSet2",
    "capacity": 200,
    "availability": 200
  }
]

_datasets = [
  {# 14.6 MB
    "_id": 0,
    "name": "Abdominal and Direct Fetal ECG Database",
    "url": "https://physionet.org/content/adfecgdb/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/adfecgdb/abdominal-and-direct-fetal-ecg-database-1.0.0.zip"
  },
  {# 2.4 MB
    "_id": 1,
    "name": "AF Termination Challenge Database",
    "url": "https://physionet.org/content/aftdb/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/aftdb/af-termination-challenge-database-1.0.0.zip"
  },
  {# 9.2 MB
    "_id": 2,
    "name": "AHA Database Sample Excluded Record",
    "url": "https://physionet.org/content/ahadb/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/ahadb/aha-database-sample-excluded-record-1.0.0.zip"
  },
  {# 1.1 MB
    "_id": 3,
    "name": "ANSI/AAMI EC13 Test Waveforms",
    "url": "https://physionet.org/content/aami-ec13/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/aami-ec13/ansiaami-ec13-test-waveforms-1.0.0.zip"
  },
  {
    "_id": 4,
    "name": "Blood Pressure in Salt-Sensitive Dahl Rats",
    "url": "https://physionet.org/content/bpssrat/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/bpssrat/blood-pressure-in-salt-sensitive-dahl-rats-1.0.0.zip"
  },
]
## connect to mongoDb client cluster0
CONNECTION_STRING = "mongodb+srv://jin-lee-00:sorby2XHsL7BAufJ@cluster0.lje5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING) # local db for development

data = client.data

# get collections
db_users = data.users
db_resources = data.resources
db_projects = data.projects
db_datasets = data.datasets

from app import routes
from app.views import dataset
from app.views import project
from app.views import resource
from app.views import user
