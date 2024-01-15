from flask import Blueprint

wordPage = Blueprint("wordPage", __name__)

@wordPage.route('/<kelime>', methods=['GET'])
def send_word_page(kelime):
    return f'Aranan kelime: {kelime}'