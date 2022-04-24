from app import db_projects, db_resources, app
from flask import request, json
from bson.json_util import dumps

from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

## projects
@app.route('/project/add', methods=['POST'])
@jwt_required()
def addproject():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  name = request_data["name"]
  desc = request_data["desc"]
  resources = request_data["resources"] # Init checked out HWSets 1, 2 to 0
  db_projects.insert_one({
    "_id": _id,
    "name": name,
    "desc": desc,
    "resources": resources,
    "users": []
  })
  return request_data

@app.route('/project/delete', methods=['POST'])
def deleteproject():
  request_data = json.loads(request.data)
  _id = request_data["_id"]
  project_cursor = db_projects.find_one({"_id": int(_id)})
  resources = project_cursor["resources"]
  for key, value in resources:
    resource_cursor = db_resources.find_one({"name": key})
    new_availability = resource_cursor['availability'] + value
    db_resources.update_one({"name": key}, {'$set': {'availability': new_availability}})
  db_projects.delete_one({"_id":_id})
  return request_data

@app.route('/project/get/<_id>')
def getproject(_id):
  #request_data = json.loads(request_data)
  #_id = request_data["_id"]
  print(_id)
  project_cursor = db_projects.find_one({"_id":int(_id)})
  print(project_cursor)
  project_json = dumps(project_cursor)
  return project_json

@app.route('/project/getall')
def getprojects():
  projects_cursor = db_projects.find()
  projects_list = list(projects_cursor)
  projects_json = dumps(projects_list)
  return projects_json

@app.route('/project/join/<_id>', methods=['GET', 'POST'])
@jwt_required()
def joinproject(_id):
  project_cursor = db_projects.find_one({"_id":int(_id)})
  current_user = get_jwt_identity()
  users = list(project_cursor["users"])
  users.append(current_user)
  print(users)
  db_projects.update_one({'_id': int(_id)}, {'$set': {'users': users}}, upsert=True)
  project_cursor = db_projects.find_one({"_id":int(_id)})
  project_json = dumps(project_cursor)
  return project_json

# Manage resources
@app.route('/project/<_id>/checkout/<resource_name>/<qty>')
def checkOut(_id, resource_name, qty):
  print(resource_name,qty)
  resource_cursor = db_resources.find_one({"name":resource_name})
  resource_query = {"name":resource_name}
  project_cursor = db_projects.find_one({"_id":int(_id)})
  current_checkedOutQty = project_cursor["resources"][resource_name]
  project_query = {"_id":int(_id)}
  
  if(resource_cursor["availability"] >= int(qty)):
    newQty = resource_cursor["availability"] - int(qty)
    updated_availability = {"$set": {"availability": newQty}}
    updated_checkedOutQty = current_checkedOutQty + int(qty)
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 200
  else: # availability < qty
    newQty = 0
    updated_checkedOutQty = current_checkedOutQty + resource_cursor["availability"]
    updated_availability = {"$set": {"availability": newQty}}
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 400 # return error

@app.route('/project/<_id>/checkin/<resource_name>/<qty>')
def checkIn(_id, resource_name, qty):
  print(resource_name,qty)
  resource_cursor = db_resources.find_one({"name":resource_name})
  resource_query = {"name":resource_name}
  project_cursor = db_projects.find_one({"_id":int(_id)})
  current_checkedOutQty = project_cursor["resources"][resource_name]
  project_query = {"_id":int(_id)}
  
  if(current_checkedOutQty >= int(qty)):
    newQty = resource_cursor["availability"] + int(qty)
    updated_availability = {"$set": {"availability": newQty}}
    updated_checkedOutQty = current_checkedOutQty - int(qty)
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 200
  else: # checkedOut < qty
    newQty = current_checkedOutQty + resource_cursor["availability"]
    updated_checkedOutQty = 0
    updated_availability = {"$set": {"availability": newQty}}
    print("updated checkout qty:",updated_checkedOutQty)
    #updated_checkedOut = [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}]

    db_projects.update_one(project_query, [{"$set": {"resources": {resource_name: updated_checkedOutQty}}}])
    db_resources.update_one(resource_query, updated_availability)
  
    resource_json = dumps(db_resources.find_one({"name":resource_name}))
    return resource_json, 400 # return error