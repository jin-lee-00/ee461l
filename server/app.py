from flask import Flask, jsonify, request, json, redirect
from flask_cors import CORS
import pymongo
from flask.helpers import send_from_directory
import os
# from user.models import User

app = Flask(__name__)
CORS(app)
app.secret_key = "temp_secret_key"

##########################################################################################
# MONGO DB STUFFS
##########################################################################################

# connect to mongoDb client cluster0
client = pymongo.MongoClient("localhost", 27017) # local db for development

# get collections
db_users = client.users
db_HWSet = client.HWSet
db_projects = client.projects

##########################################################################################
# FLASK API FUNCTIONS
##########################################################################################

# Decorators

# Routes
#from user import routes
@app.route('/user/signup', methods=["POST"])
def signup():
  request_data = json.loads(request.data)
  email = request_data['email']
  name = request_data['name']
  password = request_data['password']
  user = db_users.find({},{ "email": email})
  # Check user is not in db_users
  if user == None:
  # Add user to db_users
    db_users.insertOne(
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
  if (user != None):
    # TODO: Authenticate (jwt?)

  return request_data

@app.route("/")
def home():
    return "Hello World"


##########################################################################################

client.close()



if __name__ == "__main__":
    app.run(debug=True)