import React from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import FrontPage from './components/FrontPage';
import UserFrontPage from './components/UserFrontPage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AdminFrontPage from './components/AdminFrontpage';
import AdminLoginForm from './components/AdminLoginForm';
import AdminSignupForm from './components/AdminSignupForm';
import AdminHome from './components/AdminHome';
import Home from './components/Home';
import Settings from './components/Settings';
import AttendanceReport from './components/AttendanceReport';
import AdminAttendanceReport from './components/AdminAttendanceReport';
import AdminSettings from './components/AdminSettings';
import ProfileSettings from './components/UserSettings/ProfileSettings';
import SecuritySettings from './components/UserSettings/SecuritySettings';
import AppVersion from './components/UserSettings/AppVersion';
import AdminSecuritySettings from './components/AdminSettings/AdminSecuritySettings';



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
          <Route path="/components/Settings" component={Settings} />
          <Route path="/components/AttendanceReport" component={AttendanceReport} />
          <Route exact path="/components/AdminHome" component={AdminHome}/>
          <Route path="/components/AdminAttendanceReport" component={AdminAttendanceReport} />
          <Route exact path="/components/AdminSettings" component={AdminSettings}/>
          <Route exact path="/components/UserSettings/ProfileSettings" component={ProfileSettings}/>
          <Route path="/components/UserSettings/SecuritySettings" component={SecuritySettings} />          
          <Route path="/components/UserSettings/AppVersion" component={AppVersion} />          
          <Route path="/components/AdminSettings/AdminSecuritySettings" component={AdminSecuritySettings} />          

        </Switch>

      </Router>
            
    </div>

  )
}

