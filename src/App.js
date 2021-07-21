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
import SecuritySettings from './components/SecuritySettings';
import AdminAttendanceReport from './components/AdminAttendanceReport';
import AdminSettings from './components/AdminSettings';
import ProfileSettings from './components/ProfileSettings';

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
          <Route exact path="/components/Home" component={Home} />
          <Route path="/components/SecuritySettings" component={SecuritySettings} />          
          <Route path="/components/Settings" component={Settings} />
          <Route path="/components/AttendanceReport" component={AttendanceReport} />
          <Route exact path="/components/AdminHome" component={AdminHome}/>
          <Route path="/components/AdminAttendanceReport" component={AdminAttendanceReport} />
          <Route exact path="/components/AdminSettings" component={AdminSettings}/>
          <Route exact path="/components/ProfileSettings" component={ProfileSettings}/>

        </Switch>

      </Router>
            
    </div>

  )
}

