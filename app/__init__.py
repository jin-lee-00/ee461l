from flask import Flask
import pymongo
from flask_jwt_extended import JWTManager
from datetime import timedelta

# from user.models import User

ACCESS_EXPIRES = timedelta(hours=1)

app = Flask(__name__, static_folder='../build', static_url_path='')
app.config["JWT_SECRET_KEY"] = "super-duper-secret"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = ACCESS_EXPIRES
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
    "page_url": "https://physionet.org/content/adfecgdb/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/adfecgdb/abdominal-and-direct-fetal-ecg-database-1.0.0.zip"
  },
  {# 2.4 MB
    "_id": 1,
    "name": "AF Termination Challenge Database",
    "page_url": "https://physionet.org/content/aftdb/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/aftdb/af-termination-challenge-database-1.0.0.zip"
  },
  {# 9.2 MB
    "_id": 2,
    "name": "AHA Database Sample Excluded Record",
    "page_url": "https://physionet.org/content/ahadb/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/ahadb/aha-database-sample-excluded-record-1.0.0.zip"
  },
  {# 1.1 MB
    "_id": 3,
    "name": "ANSI/AAMI EC13 Test Waveforms",
    "page_url": "https://physionet.org/content/aami-ec13/1.0.0/",
    "zip_url": "https://physionet.org/static/published-projects/aami-ec13/ansiaami-ec13-test-waveforms-1.0.0.zip"
  },
  {
    "_id": 4,
    "name": "Blood Pressure in Salt-Sensitive Dahl Rats",
    "page_url": "https://physionet.org/content/bpssrat/1.0.0/",
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

if(db_users.count_documents({}) == 0): db_users.insert_one(_user)
if(db_projects.count_documents({}) == 0): db_projects.insert_one(_project)
if(db_resources.count_documents({}) == 0): db_resources.insert_many(_resources)
if(db_datasets.count_documents({}) == 0): db_datasets.insert_many(_datasets)

from app.views import dataset
from app.views import project
from app.views import resource
from app.views import user
from app.views import main
