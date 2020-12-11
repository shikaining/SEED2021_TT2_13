import React, { useState } from 'react';
import '../App.css';
import NavBar from './NavBar';

function MainPage() {

    const authToken = "zBrlPqfHv28k7P4gr47sk3TM3xF3uE8WdHHHl6kh";
    //mock data to see display
    const [custId, setCustId] = useState("13");
    const [accountName, setAccountNaame] = useState("Shi Kai Ning");
    const [accountNumber, setAccountNumber] = useState(12345678);
    const [balance, setBalance] = useState(10000);
    const [linked, setLinked] = useState(false);

    const url = ""

    return (
        <>
            <NavBar />

            <div className="accountDetails">
               
                <div class="card" style={{
                    width: '20rem'}}>
                    <div class="card-body">
                <h5 class="card-title">{accountName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{accountNumber}</h6>
                    <p class="card-text">Balance: {balance}</p>
                    <p class="card-text">
                        {linked === true ? "Linked" : "Not Linked"}
                    </p>

                </div>
            </div>
        </div>

        </>
    )
}

export default MainPage;
