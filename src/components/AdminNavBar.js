import React, {useState} from 'react';
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import {useHistory} from "react-router-dom";
import img1 from '../Images/Main.png';

function AdminNavBar(){
    let history = useHistory();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
      <>  
        <nav className="NavBar">

                <div className="Nav-container">

                    <NavLink exact activeClassName="active" 
                    to="/components/AdminHome" className="Nav-logo">
                    <div><img src={img1}/><p>STUDENT SAFETY SYTEM</p></div></NavLink>
            
                    <ul className= {click ? "Nav-menu-active" : "Nav-menu" }>

                        <li className="Nav-item">
                        <NavLink exact  activeClassName="active" 
                        to="/components/AdminHome" className="Nav-links" onClick={handleClick}>Home</NavLink>
                        </li>

                        <li className="Nav-item">
                        <NavLink exact activeClassName="active" 
                        to="/components/AdminAttendanceReport" className="Nav-links" onClick={handleClick}>AttendaceReport</NavLink>
                        </li>

                        <li className="Nav-item">
                        <NavLink exact activeClassName="active" 
                        to="/components/MarkAttendance" className="Nav-links" onClick={handleClick}>MarkAttendance</NavLink>
                        </li>

                        <li className="Nav-item">
                        <NavLink exact activeClassName="active" 
                        to="/components/AdminSettings" className="Nav-links" onClick={handleClick}>Settings</NavLink>
                        </li>
                        
                        <li className="Nav-item">
                        <button activeClassName="active" 
                        to="/components/AdminHome" className="Nav-links" onClick= {() => { history.push("/"); }}>SignOut</button>
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

export default AdminNavBar;