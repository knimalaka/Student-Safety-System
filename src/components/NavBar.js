import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import {useHistory} from "react-router-dom";
import Home from './Home';
import Settings from './Settings';
import AttendanceReport from './AttendanceReport';
import EditDetails from './EditDetails';


function NavBar(){
    let history = useHistory();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
      <>  
        <nav className="NavBar">

                <div className="Nav-container">

                    <NavLink exact activeClassName="active" 
                    to="/components/Home" className="Nav-logo">STUDENT SAFETY SYTEM</NavLink>
            
                    <ul className= {click ? "Nav-menu-active" : "Nav-menu" }>

                        <li className="Nav-item">
                        <NavLink exact  activeClassName="active" 
                        to="/components/Home" className="Nav-links" onClick={handleClick}>Home</NavLink>
                        </li>

                        <li className="Nav-item">
                        <NavLink exact activeClassName="active" 
                        to="/components/AttendanceReport" className="Nav-links" onClick={handleClick}>AttendaceReport</NavLink>
                        </li>

                        <li className="Nav-item">
                        <NavLink exact activeClassName="active" 
                        to="/components/EditDetails" className="Nav-links" onClick={handleClick}>EditDetails</NavLink>
                        </li>

                        <li className="Nav-item">
                        <NavLink exact activeClassName="active" 
                        to="/components/Settings" className="Nav-links" onClick={handleClick}>Settings</NavLink>
                        </li>
                        
                        <li className="Nav-item">
                        <button activeClassName="active" 
                        to="/components/Settings" className="Nav-links" onClick= {() => { history.push("/"); }}>SignOut</button>
                        </li>

                </ul>  
                <div className="Nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times": "fas fa-bars"}></i>
                </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;