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

import {useHistory} from "react-router-dom";
import img1 from './Images/Main.png';
import img2 from './Images/parent.png';
import img3 from './Images/admin2.png';


function App() {
     
  let history = useHistory();

  return (

    <div className="App">



       
<div className="FrontPage">  

<link href="//db.onlinewebfonts.com/c/3907276073752a03016016622e01a154?family=Cassannet+Regular" 
rel="stylesheet" type="text/css"/>

  <div className="FrontPageLogo">
  <img src={img1}/>
  </div>

  <div className="h2_1">
  <h2>STUDENT</h2>
  </div>

  <div className="h2_2">
  <h2>SAFETY</h2>
  </div>

  <div className="Parent">
  <button onClick= {() => { history.push("./UserFrontPage"); }}><div><img src={img2}/></div><div className="ParentWord">Parent</div></button>
  </div>

  <div className="Admin">
  <button onClick= {() => { history.push("./AdminFrontPage"); }}><div><img src={img3}/></div><div className="AdminWord">Admin</div></button>
  </div>

  </div>                      




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
