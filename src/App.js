import React, {Component} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UserFrontPage from './components/UserFrontPage';
import FrontPage from './components/FrontPage';
import AdminFrontPage from './components/AdminFrontpage';
import AdminLoginForm from './components/AdminLoginForm';
import AdminSignupForm from './components/AdminSignupForm';
import AdminHome from './components/AdminHome';
import Home from './components/Home';
import Settings from './components/Settings';
import AttendanceReport from './components/AttendanceReport';
import EditDetails from './components/EditDetails';


export default function App() {


  return (

    <div className="App">

      <Router>
          
        <Switch>

          <Route exact path="/" component={FrontPage}  />
          <Route exact path="/components/LoginForm" component={LoginForm} />
          <Route exact path="/components/SignupForm" component={SignupForm} />
          <Route exact path="/components/UserFrontPage" component={UserFrontPage} />
          <Route exact path="/components/AdminFrontPage" component={AdminFrontPage}/>
          <Route exact path="/components/AdminloginForm" component={AdminLoginForm}/>
          <Route exact path="/components/AdminSignupForm" component={AdminSignupForm}/>
          <Route exact path="/components/AdminHome" component={AdminHome}/>
          <Route exact path="/components/Home" component={Home} />
          <Route path="/components/EditDetails" component={EditDetails} />          
          <Route path="/components/Settings" component={Settings} />
          <Route path="/components/AttendanceReport" component={AttendanceReport} />

        </Switch>

      </Router>
            
    </div>

  )
}

