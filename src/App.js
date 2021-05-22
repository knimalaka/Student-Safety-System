import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import UserFrontPage from './components/UserFrontPage';


function App() {
     
  return (

    <div className="App">

      <Router>
   
        <Switch>

        <Route exact path="/components/Home" component={Home} />
        <Route exact path="/components/LoginForm" component={LoginForm} />
        <Route exact path="/components/SignupForm" component={SignupForm} />
        <Route exact path="/components/UserFrontPage" component={UserFrontPage} />

        </Switch>
            
      </Router>
        
    </div>

  );
}

export default App;
