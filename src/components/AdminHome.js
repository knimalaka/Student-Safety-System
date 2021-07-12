import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import AttendanceReport from "./AttendanceReport";
import MarkAttendance from "./MarkAttendance";
import AdminSettings from "./AdminSettings"; 
import FrontPage from "./FrontPage";
import {useHistory} from "react-router-dom";


function AdminHome(){

let history = useHistory();

    return(

        <Router>
              
        <div className="Home">

        <div className="Navbar3">
        <NavLink exact activeClassName="active" to="/components/AdminHome">Admin Home</NavLink>
        </div>

        <div className="Navbar4">
        <NavLink exact activeClassName="active" to="/components/MarkAttendance">Mark Attendance</NavLink>
        </div>

        <div className="Navbar1">
        <NavLink exact activeClassName="active" to="/components/AttendanceReport">Attendace Report</NavLink>
        </div>

        <div className="Navbar2">
        <NavLink exact activeClassName="active" to="/components/AdminSettings">Admin Settings</NavLink>
        </div>


        <button onClick= {() => { history.push("/"); }}>SignOut</button>

        <hr />
        
        <Switch>
         <Route path="/components/MarkAttendance" component={MarkAttendance} />
          <Route path="/components/AttendanceReport" component={AttendanceReport} />
          <Route path="/components/AdminSettings" component={AdminSettings} />         

        </Switch>
        </div>
    
  </Router>
  

       
    )
}

export default AdminHome;

