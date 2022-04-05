from flask import Flask, jsonify, request, json, redirect
from flask_cors import CORS
import pymongo
from bson.json_util import dumps
from flask.helpers import send_from_directory
import os
# from user.models import User

app = Flask(__name__)
# app = Flask(__name__, , static_folder='./build', static_url_path='/')
CORS(app)
app.secret_key = "temp_secret_key"

##########################################################################################
# MONGO DB STUFFS
##########################################################################################

# # connect to mongoDb client cluster0
client = pymongo.MongoClient("localhost", 27017) # local db for development

data = client.data

# get collections
db_users = data.users
db_HWSet = data.HWSet
db_projects = data.projects

##########################################################################################
# FLASK API FUNCTIONS
##########################################################################################

## users 
@app.route('/user/signup', methods=["GET", "POST"])
def signup():
  request_data = json.loads(request.data)
  email = request_data['email']
  name = request_data['name']
  password = request_data['password']
  user = db_users.find({},{ "email": email})
  # Check user is not in db_users
  # if user == None:
  # Add user to db_users
  db_users.insert_one(
      { "name": name,
        "email": email,
        "password": password,
      }
  )
  return request_data

@app.route('/user/signin', methods=["POST"])
def signin():
  request_data = json.loads(request.data)
  email = request_data['email']
  user = db_users.find({},{ "email": email})
  # Check user is in db_users
  # if (user != None):
    # TODO: Authenticate (jwt?)

  return request_data

## projects
@app.route('/project/add', methods=['POST'])
def addproject():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  name = request_data["name"]
  desc = request_data["desc"]
  resources = [0,0] # Init checked out HWSets 1, 2 to 0
  db_projects.insert_one({
    "_id": _id,
    "name": name,
    "desc": desc,
    "resources": resources
  })
  return request_data

@app.route('/project/delete', methods=['POST'])
def deleteproject():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  db_projects.delete_one({"_id": _id})
  return request_data

@app.route('/project/getall')
def getprojects():
  projects_cursor = db_projects.find()
  projects_list = list(projects_cursor)
  projects_json = dumps(projects_list)
  return projects_json

@app.route("/")
def home():
    # return send_from_directory(app.static_folder, "index.html")
    return "Hello World"


##########################################################################################

# client.close()



if __name__ == "__main__":
    app.run(debug=True)
    # app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))