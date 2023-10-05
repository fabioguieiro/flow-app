import unittest
import json
from app import app, collection

class TestApp(unittest.TestCase):

    def setUp(self):
        # Set up a test client and a temporary MongoDB collection
        app.config['TESTING'] = True
        self.app = app.test_client()
        self.test_collection = collection

    def tearDown(self):
        # Clear the temporary collection after each test
        self.test_collection.delete_many({})

    def test_store_data(self):
        # Test storing data using the '/api/store-data' endpoint

        # Define a sample data payload
        data = {
            "key1": "value1",
            "key2": "value2"
        }

        # Send a POST request to the endpoint with the sample data
        response = self.app.post('/api/store-data', json=data)

        # Check the response status code
        self.assertEqual(response.status_code, 201)

        # Check if the data was stored in the collection
        stored_data = self.test_collection.find_one(data)
        self.assertIsNotNone(stored_data)

    def test_store_data_error(self):
        # Test storing data with an invalid payload to trigger an error

        # Send a POST request with an invalid payload
        response = self.app.post('/api/store-data', json=None)

        # Check the response status code for an error (500)
        self.assertEqual(response.status_code, 500)

if __name__ == '__main__':
    unittest.main()
