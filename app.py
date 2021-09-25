#import os
from flask import Flask, render_template
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/', methods = ['GET', 'POST'])
def generateStreet():
    return render_template("waldo.html")

if __name__ == '__main__':
    app.run(debug = True)