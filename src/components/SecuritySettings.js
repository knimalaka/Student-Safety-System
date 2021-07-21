import React, {useState} from 'react';
import NavBar from './NavBar';

function SecuritySettings(name,email,password){


    return(      
        <> 
        <NavBar />
            <div className = "SecuritySettings">         
                <h2>Edit Details Here</h2>
            </div>
        </>
    
    )
}

export default SecuritySettings;

