from app import db_resources, db_projects, app
from flask import request, json
from bson.json_util import dumps

## resources
@app.route('/resource/add', methods=['POST'])
def addresource():
  request_data = json.loads(request.data)
  response = request_data
  _id = request_data["_id"]
  name = request_data["name"]
  capacity = int(request_data["capacity"])
  availability = capacity
  checkout = {} # store checkout as [user:qty] key:value pair
  name_cursor = db_resources.find_one({"name": name}) # resource must have unique names
  if name_cursor == None:
    db_resources.insert_one({
      "_id": _id,
      "name": name,
      "capacity": capacity,
      "availability": availability,
      "checkout": checkout
    }) 

    db_projects.update_many({}, [{"$set": {"resources": {name: 0}}}])
    # append the status to
    response["status"] = 200
    return response
  else:
    # resource already exists
    response["status"] = 400
    return response

@app.route('/resource/delete', methods=['POST'])
def deleteresource():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  db_resources.delete_one({"_id": _id})
  return request_data

@app.route('/resource/getall', methods=['GET'])
def getresources():
  resources_cursor = db_resources.find()
  resources_list = list(resources_cursor)
  resources_json = dumps(resources_list)
  return resources_json