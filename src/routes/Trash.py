from flask import Blueprint, jsonify, request
import uuid

# Entities
from models.entities.Trash import Trash
# Models
from models.TrashModel import TrashModel

main = Blueprint('trash_blueprint', __name__)


@main.route('/')
def get_trashes():
    try:
        users = TrashModel.get_trashs()
        return jsonify(users)
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/<id>')
def get_trash(id):
    try:
        trash = TrashModel.get_trash(id)
        if trash != None:
            return jsonify(trash)
        else:
            return jsonify({}), 404
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/add', methods=['POST'])
def add_trash():
    try:
        category = request.json['category']
        amount = int(request.json['amount'])
        link = request.json['link']
        id = uuid.uuid4()
        trash = Trash(str(id), category, amount, link)

        affected_rows = TrashModel.add_trash(trash)

        if affected_rows == 1:
            return jsonify(trash.id)
        else:
            return jsonify({'message': "Error on insert"}), 500

    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/update/<id>', methods=['PUT'])
def update_trash(id):
    try:
        category = request.json['category']
        amount = int(request.json['amount'])
        link = request.json['link']
        trash = Trash(id, category, amount, link)

        affected_rows = TrashModel.update_trash(trash)

        if affected_rows == 1:
            return jsonify(trash.id)
        else:
            return jsonify({'message': "No trash updated"}), 404

    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@main.route('/delete/<id>', methods=['DELETE'])
def delete_trash(id):
    try:
        trash = Trash(id)

        affected_rows = TrashModel.delete_trash(trash)

        if affected_rows == 1:
            return jsonify(trash.id)
        else:
            return jsonify({'message': "No trash deleted"}), 404

    except Exception as ex:
        return jsonify({'message': str(ex)}), 500
