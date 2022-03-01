from flask import Flask, render_template, url_for, redirect, session
from functools import wraps
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "development"

# Database
CONNECTION_STRING = "mongodb+srv://jin-lee-00:sorby2XHsL7BAufJ@cluster0.lje5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = MongoClient(CONNECTION_STRING)
db = client.get_default_database()

# Decorators
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "logged_in" in session:
            return f(*args, **kwargs)
        else:
            return redirect("/")
    return decorated_function

#Routes
from user import routes

@app.route("/") # root page (home)
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
@login_required
def projects():
    return render_template("projects.html")

@app.route("/resources")
def resource():
    return render_template("resources.html")

@app.route("/datasets")
def datasets():
    return render_template("datasets.html")

if __name__ == "__main__":
    app.run(debug=True)