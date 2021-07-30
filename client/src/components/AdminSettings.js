import React, {useState} from 'react';
import NavBar from './AdminNavBar';
import { NavLink } from 'react-router-dom';

function AdminSettings(){

    const [click, setClick] = useState(false);
    const handleClick = () => (!click)

  return(
    <>
    <NavBar />
        <div className = "AdminSettings">         
            <h2>Settings</h2>

            <div className="Nav-container-settings">

            <li className="Nav-item-settings">
            <NavLink exact to="/components/AdminSettings/AdminSecuritySettings" className="Nav-links-settings" 
            onClick={handleClick}>Security Settings</NavLink>
            </li>

            <li className="Nav-item-settings">
            <NavLink exact to="/components/UserSettings/AppVersion" className="Nav-links-settings" 
            onClick={handleClick}>App Version</NavLink>
            </li>

        </div>
        </div>
    </>       
    )
}

export default AdminSettings;

