import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import AttendanceReport from "./AttendanceReport";
import EditDetails from "./pages/EditDetails"; 
import Settings from './Settings';
import FrontPage from "./FrontPage";
import {useHistory} from "react-router-dom";


function Home(){

let history = useHistory();

    return(

        <div className="Home">
        <Router>

        <div className="Nav-container">

        <NavLink exact activeClassName="active" 
        to="/components/Home" className="Nav-logo">Student Safety System</NavLink>
      <ul className="Nav-menu">
        <li className="Nav-item">
        <NavLink exact activeClassName="active" 
        to="/components/Home" className="Nav-links">Home</NavLink>
        </li>

        <li className="Nav-item">
        <NavLink exact activeClassName="active" 
        to="/components/AttendanceReport" className="Nav-links">AttendaceReport</NavLink>
        </li>

        <li className="Nav-item">
        <NavLink exact activeClassName="active" 
        to="/components/pages/EditDetails" className="Nav-links">EditDetails</NavLink>
        </li>

        <li className="Nav-item">
        <NavLink exact activeClassName="active" 
        to="/components/Settings" className="Nav-links">Settings</NavLink>
        </li>

        <button onClick= {() => { history.push("/"); }}>SignOut</button>

      </ul>  
        </div>



        <hr />



        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components/pages/EditDetails" component={EditDetails} />
          <Route path="/components/Settings" component={Settings} />
          <Route exact path="/components/AttendanceReport" component={AttendanceReport} />

        </Switch>

    
  </Router>
  </div>


       
    )
}

export default Home;

