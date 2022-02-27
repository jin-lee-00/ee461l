from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route("/") # root page (home)
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
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