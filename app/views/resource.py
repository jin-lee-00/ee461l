from app import db_resources, app
from flask import request, json
from bson.json_util import dumps

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