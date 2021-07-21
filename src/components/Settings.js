import React, {useState} from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';

function Settings(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return( 
        <>
        <NavBar />
            <div className="Settings">
                <h2>Settings</h2>
                
                <div className="Nav-container-settings">

                    <li className="Nav-item-settings">
                    <NavLink exact to="/components/UserSettings/SecuritySettings" className="Nav-links-settings" 
                    onClick={handleClick}>Security Settings</NavLink>
                    </li>
                    
                    <li className="Nav-item-settings">
                    <NavLink exact to="/components/UserSettings/ProfileSettings" className="Nav-links-settings" 
                    onClick={handleClick}>Profile Settings</NavLink>
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

export default Settings;


