import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import "./assets/css/tabs.css";
import Dashboard from './components/dashboard';
import SignUp from './components/signup';
import Invest from './components/invest';
import Signin from './components/signin';
import Investment from './components/investment';
import Profile from './components/profile';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/profile">
        <Profile />
        </Route>
      <Route path="/invest">
        <Invest />
      </Route>
       <Route path="/investment">
         <Investment />
        </Route>
        <Route path="/dashboard">
        <Dashboard />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route exact path="/">
        < Dashboard />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
