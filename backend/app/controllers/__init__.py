from app import app
from flask import render_template

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/checkout/')
def checkout():
    return render_template('checkout.html')

@app.route('/thanks/<client_name>/')
def thanks(client_name):
    return render_template('thanks.html', client=client_name)
