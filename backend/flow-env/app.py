from flask import Flask, request, jsonify
from flask_cors import CORS 
from pymongo import MongoClient

app = Flask(__name__)

CORS(app, origins=["*"])

client = MongoClient('mongodb+srv://fabioguieiro:boIoxn66dutU2FLN@flow-cluster.ojd4jjc.mongodb.net/?retryWrites=true&w=majority')
db = client["Flow-Cluster-Database"]
collection = db["Flow-Cluster-Collection"]

@app.route('/api/store-data', methods=['POST'])
def store_data():
    try:
        data = request.get_json()
        collection.insert_one(data)
        return jsonify({'message': 'Data stored successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)