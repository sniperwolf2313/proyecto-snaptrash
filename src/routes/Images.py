from fileinput import filename
from flask import Flask, Blueprint,  request, redirect, render_template, flash, jsonify

from werkzeug.utils import secure_filename

from database.db import get_connection

import os

main = Blueprint('images_blueprint', __name__)

UPLOAD_FOLDER = 'uploads'

ALLOWED_EXTENSIONS = set(['png','jpg','jpeg'])
    
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.',1)[1].lower() in ALLOWED_EXTENSIONS

@main.route('/<id>')
def get_image(id):
    print()

@main.route('/add/<id>', methods=['POST'])
def add_image(id):
    file = request.files['file']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filename = '%s.%s'% (id, filename.rsplit('.',1)[1].lower())
        file.save(os.path.join(UPLOAD_FOLDER, filename))

        connection = get_connection()

        with connection.cursor() as cursor:
            cursor.execute("""UPDATE trash SET link = %s 
                            WHERE id = %s""", (filename, id))
            connection.commit()

        connection.close()

    print(file)

    flash('File successfully uploaded')
    return jsonify({'message': 'File successfully uploaded'})

#def get_image():
