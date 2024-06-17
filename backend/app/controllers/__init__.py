from app import app

@app.route('/')
def home():
    return '<h1>Esta é a minha landing page</h1>'

@app.route('/checkout/')
def checkout():
    return '<h1>Esta é a página de checkout</h1>'

@app.route('/thanks/<client_name>/')
def thanks(client_name):
    return f'<h1>Obrigado {client_name}!</h1>'
