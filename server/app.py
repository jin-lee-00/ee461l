from flask import Flask, jsonify, redirect
import pymongo
from flask.helpers import send_from_directory
import os

app = Flask(__name__)
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

@app.route("/")
def index():
    return "Hello World"

##########################################################################################

client.close()



if __name__ == "__main__":
    app.run(debug=True)