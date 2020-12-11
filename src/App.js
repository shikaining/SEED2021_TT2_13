import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import MainPage from "./components/MainPage";
import Transfer from "./components/Transfer";
import Login from "./components/LogIn";
import Transactions from "./components/Transactions";

function App() {

  return (

  <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/mainpage" component={MainPage} />
            <Route path="/transfer" component={Transfer} />
            <Route path="/login" component={Login} />
            <Route path="/transactions" component={Transactions} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;