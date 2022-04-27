from app import db_datasets, app
from flask import request, json
from bson.json_util import dumps

## datasets
@app.route('/dataset/add', methods=['POST'])
def adddataset():
  request_data = json.loads(request.data)
  response = request_data
  _id = request_data["_id"]
  name = request_data["name"]
  page_url = request_data["page_url"]
  zip_url = request_data["zip_url"]
  name_cursor = db_datasets.find_one({"name": name}) # datasets must have unique names
  if name_cursor == None:
    db_datasets.insert_one({
      "_id": _id,
      "name": name,
      "url": page_url,
      "zip_url": zip_url,
    }) 

    # append the status
    response["status"] = 200
    return response
  else:
    # resource already exists
    response["status"] = 400
    return response

@app.route('/dataset/getall')
def getdatasets():
  datasets_cursor = db_datasets.find()
  datasets_list = list(datasets_cursor)
  datasets_json = dumps(datasets_list)
  return datasets_json
