import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import UserFrontPage from './components/UserFrontPage';
import FrontPage from './components/FrontPage';
import AdminFrontPage from './components/AdminFrontpage';
import AdminLoginForm from './components/AdminLoginForm';
import AdminSignupForm from './components/AdminSignupForm';
import AdminHome from './components/AdminHome';
 
function App() {
     
 
  return (

    <div className="App">


      <Router>
   
        <Switch>

        <Route exact path="/components/Home" component={Home} />
        <Route exact path="/components/LoginForm" component={LoginForm} />
        <Route exact path="/components/SignupForm" component={SignupForm} />
        <Route exact path="/components/UserFrontPage" component={UserFrontPage} />
        <Route exact path="/components/FrontPage" component={FrontPage}/>
        <Route exact path="/components/AdminFrontPage" component={AdminFrontPage}/>
        <Route exact path="/components/AdminloginForm" component={AdminLoginForm}/>
        <Route exact path="/components/AdminSignupForm" component={AdminSignupForm}/>
        <Route exact path="/components/AdminHome" component={AdminHome}/>
 
        </Switch>
            
      </Router>
        
    </div>

  );
}

export default App;
