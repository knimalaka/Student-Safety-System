import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Home from './Home';
import Settings from './Settings';
import AttendanceReport from './AttendanceReport';
import EditDetails from './pages/EditDetails';


function NavBar(){

    let history = useHistory();

    return(
      <>  
        <nav className="NavBar">

                <div className="Nav-container">

                    <NavLink exact activeClassName="active" 
                    to="/components/Home" className="Nav-logo">Student Safety System</NavLink>
            
                    <ul className="Nav-menu">

                        <li className="Nav-item">
                        <NavLink exact  activeClassName="active" 
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


            </nav>
        </>
    )
}

export default NavBar;