import React, {useState} from 'react';
import NavBar from './NavBar';

function EditDetails(name,email,password){


    return(      
        <> 
        <NavBar />
            <div className = "EditDetails">         
                <h2>Edit Details Here</h2>
            </div>
        </>
    
    )
}

export default EditDetails;

