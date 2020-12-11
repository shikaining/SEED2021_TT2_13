import React, { useState } from 'react';
import NavBar from './NavBar';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Transfer() {

    const authToken = "zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh";
    //url to get the response
    const url = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update";

    const [amount, setAmount] = useState(0);
    const [custId, setCustId] = useState(null);
    const [receiverId, setReceiverId] = useState(null);
    const [myBalance, setMyBalance] = useState(null);
    const [receiverBalance, setReceiverBalance] = useState(null);


    //get my own balance-api 1
    //get their balance-api 2
    //subtract from mine
    //update my account-api 3
    //increase to theirs
    //update their account-api 4


    function submitHandler(e) {
        e.preventDefault();
        console.log({ custId });
        console.log({ receiverId });
        console.log({ amount });
        console.log({ receiverId });

        //deduct from logged in user
        let fdata = new FormData();
        fdata.append("custID", custId);
        fdata.append("Amount", myBalance);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": authToken
            },
            body: fdata,

        })
            .then((res) => {
                console.log(res);
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });


        //to receiver
        let fdata1 = new FormData();
        fdata.append("custID", receiverId);
        fdata.append("Amount", receiverBalance);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": authToken
            },
            body: fdata1,

        })
            .then((res) => {
                console.log(res);
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });


    };

    return (
        <>
            <NavBar />
            <div className="transferForm">
                <form>
                    <h3>Transfer to another account</h3>
                    <div className="form-group">
                        <label>Customer ID of receiver</label>
                        <input type="text" className="form-control" value={receiverId} onChange={(e) => {
                            setReceiverId(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" className="form-control" min="0" value={amount} onChange={(e) => {
                            setAmount(e.target.value);
                        }} />
                    </div>

                    <button type="submit" onClick={submitHandler} className="btn btn-primary btn-block">Confirm Transfer</button>

                </form>
            </div>
        </>
    )
}

export default Transfer;
