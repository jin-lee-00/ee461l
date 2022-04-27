from urllib import response
from app import db_resources, data
from app import app
import json

def test_addresource():
    response = app.test_client().post('/resource/add', data=json.dumps({
        '_id': 10000,
        'name': "test_resource",
        'capacity': 1000
        }),
    content_type='application/json',
    )
    
    data = json.loads(response.get_data(as_text=True))
    name_cursor = db_resources.find_one({"name": "test_resource"})
    
    assert name_cursor is not None
    assert name_cursor["_id"] == 10000
    assert name_cursor["name"] == "test_resource"
    assert name_cursor["capacity"] == 1000
    assert name_cursor["availability"] == 1000
    assert name_cursor["checkout"] == {}
    assert data['status'] == 200

    response = app.test_client().post('/resource/add', data=json.dumps({
        '_id': 10000,
        'name': "test_resource",
        'capacity': 1000
        }),
    content_type='application/json',
    )

    d = json.loads(response.get_data(as_text=True))
    assert d["status"] == 400

    db_resources.delete_one({"name": "test_resource"})


def test_deleteresource():
    app.test_client().post('/resource/add', data=json.dumps({
        '_id': 10000,
        'name': "test_resource",
        'capacity': 1000
        }),
    content_type='application/json',
    )

    response = app.test_client().post('/resource/delete', data=json.dumps({
        '_id': 10000,
        }),
    content_type='application/json',
    )

    assert response.status_code == 200

    d = json.loads(response.get_data(as_text=True))
    assert d["_id"] ==  10000

    resource_exists = db_resources.find_one({"_id": 10000})
    assert resource_exists is None


def test_getresources():
    response = app.test_client().get('/resource/getall')

    assert response.status_code == 200

    d = json.loads(response.get_data(as_text=True))
    assert len(d) == len(list(db_resources.find()))
