from unicodedata import name
from flask import jsonify
from app import db_users
import random
from app import app
import json

# import pytest
# test_signup
#
# creates a new user
# asserts that the user was correctly created
# asserts user exists in the db
# asserts that user cannot be recreated
# deletes user
#
def test_signup():
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
    data = json.loads(response.get_data(as_text=True))
    assert data['status'] == 200
    assert data['name'] == name
    assert data['email'] == email
    assert data['password'] == password

    user_exists = db_users.find_one({"email": email})
    assert user_exists is not None

    response = app.test_client().post('/user/signup', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    assert data["status"] == 400
    db_users.delete_one({"email": email})


# test_signin
#
# asserts that user cannot signin if they don't exist
# creates new user
# asserts that signin as user is successful
# asserts that signing in with the incorrect password fails
# deletes user
#
def test_signin ():
    random_id = random.randint(0, 255)
    name = "test_user" + str(random_id)
    email = "test_user" + str(random_id) + "@gmail.com"
    password = "Test_password" + str(random_id)

    response = app.test_client().post('/user/signin', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    assert data['status'] == 400

    app.test_client().post('/user/signup', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    response = app.test_client().post('/user/signin', data=json.dumps({
        'name': name,
        'email': email,
        'password': password,
        }),
    content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    assert data["status"] == 200
    assert data["name"] == name
    assert data["email"] == email
    assert data["password"] == password

    response = app.test_client().post('/user/signin', data=json.dumps({
        'name': name,
        'email': email,
        'password': "wrong+password",
        }),
    content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    assert data["status"] == 401
    db_users.delete_one({"email": email})


# test_tokencreate
# 
# signup and create a new user
# create a token 
# assert that the token was created properly
# 
def test_tokencreate ():
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

    email_cursor = db_users.find_one({"email": email})
    tempname = email_cursor["name"]

    response = app.test_client().post("/token", data=json.dumps({
        'email': email,
        }),
    content_type='application/json',
    )
    
    data = json.loads(response.get_data(as_text=True))
    assert data['status'] == 200
    assert data['name'] == tempname
    assert data["token"] is not None

# test_protected
# doesn't work: idk what needs to be sent in to protected or if we ever call it
def test_protected():
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

    email_cursor = db_users.find_one({"email": email})
    tempname = email_cursor["name"]

    app.test_client().post("/token", data=json.dumps({
        'email': email,
        }),
    content_type='application/json',
    )

    response = app.test_client().post("/protected",
        content_type='application/json',
    )

    data = json.loads(response.get_data(as_text=True))
    print(data["msg"])
    # assert data == name
    




