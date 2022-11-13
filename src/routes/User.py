from flask import Blueprint, jsonify, request
import uuid
import smtplib
from email.message import EmailMessage
import ssl
from decouple import config

# Entities
from models.entities.User import User
# Models
from models.UserModel import UserModel

main = Blueprint('user_blueprint', __name__)


@main.route('/')
def get_users():
    try:
        users = UserModel.get_users()
        return jsonify(users)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/<id>/<password>')
def get_user(id,password):
    try:
        user = UserModel.get_user(id,password)
        if user != None:
            return jsonify(user)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/add', methods=['POST'])
def add_user():
    try:
        name = request.json['name']
        email = request.json['email']
        password = request.json['password']
        id = uuid.uuid4()
        user = User(str(id), name, email, password)

        affected_rows = UserModel.add_user(user)

        if affected_rows == 1:
            return jsonify(user.id)
        else:
            return jsonify({'message': "Error on insert"}), 500

    except Exception as ex:
        return jsonify({'message': str(ex)}), 500

@main.route('/correo', methods=['POST'])
def correo():
    try:
        description = str(request.json['description'])
        latitude = str(request.json['latitude'])
        longitude = str(request.json['longitude'])

        print(description)
        print(latitude)
        print(longitude)
        message = 'Hola este es un reporte de SNAPTRASH. \nLos datos son:\nDesrcipción: ' +description+'\nLatitude: '+latitude+'\nLongitude: '+longitude
        message = str(message)

        print(message)

        remitente = 'jeanmarcopedraza@gmail.com'

        em = EmailMessage()
        em['From'] = 'alexispatinoagudelo@gmail.com'
        em['To'] = remitente
        em['Subject'] = 'Reporte SNAPTRASH'
        em.set_content(message)

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login('alexispatinoagudelo@gmail.com',config('PASSWORD'),)
            smtp.sendmail('alexispatinoagudelo@gmail.com', remitente, em.as_string())

        return jsonify('OK')

    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/update/<id>', methods=['PUT'])
def update_user(id):
    try:
        name = request.json['name']
        user = User(id, name)

        affected_rows = UserModel.update_user(user)

        if affected_rows == 1:
            return jsonify(user.id)
        else:
            return jsonify({'message': "No user updated"}), 404

    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/delete/<id>', methods=['DELETE'])
def delete_user(id):
    try:
        user = User(id)

        affected_rows = UserModel.delete_user(user)

        if affected_rows == 1:
            return jsonify(user.id)
        else:
            return jsonify({'message': "No user deleted"}), 404

    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
