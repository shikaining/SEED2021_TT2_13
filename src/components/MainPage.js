import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from './NavBar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MainPage() {

    const authToken = "zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh";
    //mock data to see display
    const [custId, setCustId] = useState(3);
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState(null);
    const [balance, setBalance] = useState(null);
    const [linked, setLinked] = useState(false);

    const url = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view"

    let backendUrl = "http://localhost:5000/getAccount";

    const retrieveAccountDetails = async () => {

        console.log("fetching.. ");

        // calling api straight
        // await fetch(url, {
        //     method: 'POST',
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "x-api-key": authToken
        //     },
        //     body: JSON.stringify({
        //         custID: 3
        //     })
        // })
        // .then((res) => {
        //     return res.text();
        // })
        // .then((data) => {
        //     console.log(data);
        //     // setAccountName(data.accountName);
        //     // setAccountNumber(data.accountNumber);
        //     // setBalance(data.availableBal);
        //     // setLinked(linked);

        // })
        // .catch((err) => {
        //     console.log(err);
        // });

        //calling our backend 
        backendUrl +=( "/" + custId);
        console.log(backendUrl);
        await fetch(backendUrl
        )
            .then((res) => {
                return res.text();
            })
            .then((data) => {
                console.log(data);
                console.log(JSON.parse(data));

                let parsedData = JSON.parse(data);
                setAccountName(parsedData[0].accountName);
                setAccountNumber(parsedData[0].accountNumber);
                setBalance(parsedData[0].availableBal);
                setLinked(parsedData[0].linked);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        retrieveAccountDetails();
    }, [5000]);
    return (
        <>
            <NavBar />

            <div className="accountDetails">

                <div className="card" style={{
                    width: '20rem'
                }}>
                    <div class="card-body">
                        <h5 className="card-title">{accountName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{accountNumber}</h6>
                        <p className="card-text">Balance: {balance}</p>
                        <p className="card-text">
                            {linked === true ? "Linked" : "Not Linked"}
                        </p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default MainPage;
