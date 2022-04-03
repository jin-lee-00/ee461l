from flask import Flask, jsonify, request, json, redirect
# from flask_cors import CORS
import pymongo
from flask.helpers import send_from_directory
import os
from user.models import User

app = Flask(__name__)
# app = CORS(app)
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
  return User().signup()

@app.route("/")
def home():
    return "Hello World"


##########################################################################################

client.close()



if __name__ == "__main__":
    app.run(debug=True)