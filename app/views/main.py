from app import app
from flask.helpers import send_from_directory

# main
@app.route("/")
def home():
    # return send_from_directory(app.static_folder, "index.html")
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')