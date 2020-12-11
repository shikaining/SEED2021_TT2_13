from flask import Flask, jsonify,json
import requests
from flask_cors import CORS

headers ={'x-api-key':'zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh'}
app = Flask(__name__)
CORS(app)


@app.route('/')
def api_root():
    return 'Welcome to /menu.'

@app.route('/getTransaction/<int:acc_id>',methods=['GET'])
def getTransaction(acc_id):
    response = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view',
        json={'custID':acc_id},
        headers={'x-api-key': 'zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh', 'Content-Type': 'application/json'},
    )
    json_response = jsonify(response.json())
    json_obj = response.json()
    for item in json_obj:
        item['dateTime']=item['dateTime'][:10]
    return jsonify(json_obj)


@app.route('/getAccount/<int:acc_id>',methods=['GET'])
def getAccount(acc_id):
    responseCustomer = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view',
        json={'custID':acc_id},
        headers={'x-api-key': 'zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh', 'Content-Type': 'application/json'},
    )
    return jsonify(responseCustomer.json())

@app.route('/getAll',methods=['GET'])
def getAll():
    response = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/users',
        headers={'x-api-key': 'zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh','Content-Type': 'application/json'},
    )
    status_code = response.status_code
    print(status_code)
    if status_code == 200:
        print(response.json())
        return jsonify(response.json())
    else:
        print('response is not 200')
    return None

@app.route('/updateAccount/<int:acc_id>/<int:amount>',methods=['GET'])
def updateAccount(acc_id,amount):
    response = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update',
        json={'custID':acc_id, 'amount':amount},
        headers={'x-api-key': 'zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh', 'Content-Type': 'application/text'},
    )
    print(response.status_code)
    print(response.text)
    # json_response = jsonify(response.json())
    return response.text


if __name__ == '__main__':
    app.run(debug=True)
