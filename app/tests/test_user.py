from app import user
import json

def test_signup(client):
    user_data = {
        "first": "first"
    }