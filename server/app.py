from flask import Flask, jsonify
from pymongo import MongoClient 
from flask.helpers import send_from_directory
import os

app = Flask(__name__)

##########################################################################################
# MONGO DB STUFFS
##########################################################################################

# connect to mongoDb client cluster0
Client=MongoClient("mongodb+srv://noahz7213:R1saZSh8cH9gnpvt@cluster0.s4pmq.mongodb.net/Cluster0?retryWrites=true&w=majority")

# get collevtions
HWSet = Client.HWSet
Projects = Client.Projects

##########################################################################################
# FLASK API FUNCTIONS
##########################################################################################

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

##########################################################################################

Client.close()



if __name__ == "__main__":
    app.run(debug=True)