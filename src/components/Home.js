import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import AttendanceReport from "./AttendanceReport";
import EditDetails from "./EditDetails"; 
import Settings from './Settings';
import FrontPage from "./FrontPage";
import {useHistory} from "react-router-dom";


function Home(){

let history = useHistory();

    return(

        <Router>
              
        <div className="Home">

        <div className="Nav-container">

        <NavLink exact activeClassName="active" 
        to="/components/Home" className="Nav-logo">Student Safety System</NavLink>
      <ul>
        <li>
        <NavLink exact activeClassName="active" 
        to="/components/Home" className="Nav-home">Home</NavLink>
        </li>

        <li>
        <NavLink exact activeClassName="active" to="/components/AttendanceReport" 
        className="Nav-attendanceReport">AttendaceReport</NavLink>
        </li>

        <li>
        <NavLink exact activeClassName="active" 
        to="/components/EditDetails" className="Nav-editDetails">EditDetails</NavLink>
        </li>

        <li>
        <NavLink exact activeClassName="active" 
        to="/components/Settings" className="Nav-settings">Settings</NavLink>
        </li>
      </ul>  
        </div>

        <button onClick= {() => { history.push("/"); }}>SignOut</button>

        <hr />
        
        <Switch>
          <Route path="/components/AttendanceReport" component={AttendanceReport} />
          <Route path="/components/EditDetails" component={EditDetails} />
          <Route path="/components/Settings" component={Settings} />



        </Switch>
        </div>
    
  </Router>
  

       
    )
}

export default Home;

