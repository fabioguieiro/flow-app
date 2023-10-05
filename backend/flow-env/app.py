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

        if not validate_flux(data):
            return jsonify({'error': 'Seems like yout flux is incomplete, close this modal and check if all the nodes are connected'}), 400 

        collection.insert_one(data)
        return jsonify({'message': 'Your flux is created and stored successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


def validate_flux(flux):
    nodes = flux.get("nodes", [])
    edges = flux.get("edges", [])

    start_nodes = [node for node in nodes if node.get("type") == 'startNode']
    diamond_nodes = [node for node in nodes if node.get("type") == 'diamondNode']
    success_nodes = [node for node in nodes if node.get("type") == 'successNode']
    unsuccess_nodes = [node for node in nodes if node.get("type") == 'unsuccessNode']

    if len(start_nodes) != 1:
        return False

    for diamond_node in diamond_nodes:
        incoming_edges = [edge for edge in edges if edge.get("target") == diamond_node.get("id")]
        outgoing_edges = [edge for edge in edges if edge.get("source") == diamond_node.get("id")]

        if len(incoming_edges) != 1 or len(outgoing_edges) != 2:
            return False

    for success_node in success_nodes:
        incoming_edges = [edge for edge in edges if edge.get("target") == success_node.get("id")]
        outgoing_edges = [edge for edge in edges if edge.get("source") == success_node.get("id")]

        if len(incoming_edges) != 1 or len(outgoing_edges) != 0:
            return False

    for unsuccess_node in unsuccess_nodes:
        incoming_edges = [edge for edge in edges if edge.get("target") == unsuccess_node.get("id")]
        outgoing_edges = [edge for edge in edges if edge.get("source") == unsuccess_node.get("id")]

        if len(incoming_edges) != 1 or len(outgoing_edges) != 0:
            return False

    return True


if __name__ == '__main__':
    app.run(debug=True)