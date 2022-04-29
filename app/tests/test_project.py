from urllib import response
from app import db_projects, db_users
from app import app
import json
import random

def test_addproject():
    random_id = random.randint(0, 255)
    name = "test_user" + str(random_id)
    email = "test_user" + str(random_id) + "@gmail.com"
    password = "Test_password" + str(random_id)

    response = app.test_client().post('/user/signup', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    assert response.status_code == 200

    response = app.test_client().post('/user/signin', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    assert response.status_code == 200

    response = app.test_client().post("/token", data=json.dumps({
        'email': email,
        }),
    content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    token = data["token"]

    headers = {
        'Authorization': 'Bearer {}'.format(token)
    }

    assert response.status_code == 200

    response = app.test_client().post("/project/add", data=json.dumps({
        '_id' : 10000,
        'name' : "test_project_10000",
        'desc' : "test description 10000",
        'resources' : {
            'HWSet1': 0
        },
    }),
    headers = headers,
    content_type='application/json',
    )

    assert response.status_code == 200

    data = json.loads(response.get_data(as_text=True))
    assert data['_id'] == 10000

    id_cursor = db_projects.find_one({"_id": 10000})
    assert id_cursor is not None

    db_projects.delete_one({"_id": 10000})
    db_users.delete_one({"email": email})



def test_deleteproject():
    random_id = random.randint(0, 255)
    name = "test_user" + str(random_id)
    email = "test_user" + str(random_id) + "@gmail.com"
    password = "Test_password" + str(random_id)

    app.test_client().post('/user/signup', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    app.test_client().post('/user/signin', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    response = app.test_client().post("/token", data=json.dumps({
        'email': email,
        }),
    content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    token = data["token"]

    headers = {
        'Authorization': 'Bearer {}'.format(token)
    }

    assert response.status_code == 200

    app.test_client().post("/project/add", data=json.dumps({
        '_id' : 10000,
        'name' : "test_project_10000",
        'desc' : "test description 10000",
        'resources' : {
            'HWSet1': 0
        },
    }),
    headers = headers,
    content_type='application/json',
    )

    response = app.test_client().post("/project/delete", data=json.dumps({
        '_id' : 10000,
    }),
    content_type='application/json',
    )

    assert response.status_code == 200

    data = json.loads(response.get_data(as_text=True))
    assert data["_id"] == 10000

    project_cursor = db_projects.find_one({"_id": 10000})
    assert project_cursor is None

    db_users.delete_one({"email": email})


def test_getproject():
    random_id = random.randint(0, 255)
    name = "test_user" + str(random_id)
    email = "test_user" + str(random_id) + "@gmail.com"
    password = "Test_password" + str(random_id)

    app.test_client().post('/user/signup', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    app.test_client().post('/user/signin', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    response = app.test_client().post("/token", data=json.dumps({
        'email': email,
        }),
    content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    token = data["token"]

    headers = {
        'Authorization': 'Bearer {}'.format(token)
    }

    assert response.status_code == 200

    app.test_client().post("/project/add", data=json.dumps({
        '_id' : 10000,
        'name' : "test_project_10000",
        'desc' : "test description 10000",
        'resources' : {
            'HWSet1': 0
        },
    }),
    headers = headers,
    content_type='application/json',
    )

    response = app.test_client().get("/project/get/10000",
    content_type='application/json',)
    
    assert response.status_code == 200

    data = json.loads(response.get_data(as_text=True))

    print(data)

    assert data['_id'] == 10000
    assert data['name'] == "test_project_10000"
    assert data['desc'] == "test description 10000"
    assert data['resources'] == {
            'HWSet1': 0
        }
    assert data['users'] == []

    db_projects.delete_one({"_id": 10000})
    db_users.delete_one({"email": email})




