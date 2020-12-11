
from flask import Flask, jsonify,json
import requests
from flask_cors import CORS

header = {'x-api-key': 'zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh', 'Content-Type': 'application/json'}
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
        headers=header,
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
        headers=header,
    )
    return jsonify(responseCustomer.json())

@app.route('/getAll',methods=['GET'])
def getAll():
    response = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/users',
        headers=header,
    )
    status_code = response.status_code
    if status_code == 200:
        return jsonify(response.json())
    else:
        print('response is not 200')
    return None

@app.route('/updateAccount/<int:acc_id>/<int:amount>',methods=['GET'])
def updateAccount(acc_id,amount):
    response = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update',
        json={'custID':acc_id, 'amount':amount},
        headers=header,
    )
    return response.text
@app.route('/debug')
def index():
    html_content = """
    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <button type="submit">SUBMIT</button>
    </form>
    """
    return html_content

@app.route('/login', methods = ["POST"])
def login():
    login_url = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login"
    response = requests.post(login_url, json = dict(request.form), headers = headers)
    print(dict(request.form))

    if response.status_code != 200:
        print(response.status_code)
        print(type(response.status_code))
        return {"status_code" : response.status_code}
    else:
        modified_response = {}
        modified_response["data"] = response.json()
        modified_response["status_code"] = response.status_code
        return modified_response

@app.route('/transaction/add', methods = ["POST", "GET"])
def addTransaction():
    add_transaction_url = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/add" ## Add Transaction
    
    #tosend_api = request.json.copy()
    print(request.json)
    response = requests.post(add_transaction_url, json = request.json, headers = headers)

    if response.status_code != 200:
        return {"status_code" : response.status_code}
    else:
        modified_response = {}
        modified_response["data"] = response.json()
    
        return modified_response
    return "s"

if __name__ == '__main__':
    app.run(debug=True)
