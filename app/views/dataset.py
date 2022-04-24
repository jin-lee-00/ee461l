from app import db_datasets, app
from bson.json_util import dumps

## datasets
@app.route('/dataset/getall')
def getdatasets():
  datasets_cursor = db_datasets.find()
  datasets_list = list(datasets_cursor)
  datasets_json = dumps(datasets_list)
  return datasets_json
