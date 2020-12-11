import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
   
    return (

        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/mainpage"}>
                    DBS
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to={"/transactions"}>
                                Transactions
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/transfer"}>
                                Transfer
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/login"}>
                                Logout
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
