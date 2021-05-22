import React, {useState,Component} from 'react';
import {useHistory} from "react-router-dom";
import img1 from '../Images/Main.png';

 
function UserFrontPage(){

    let history = useHistory();

    return(
        
        <div className="UserFrontPage">

        <img src={img1} alt=""/>


        <div className="Login">
        <button onClick= {() => { history.push("./LoginForm"); }}>Login</button>
        </div>

        <div className="Signup">
        <button onClick= {() => { history.push("./SignupForm"); }}>Signup</button>
        </div>

        <div className="h2_1">
        <h2>STUDENT SAFETY</h2>
        </div>
        
    </div>
           
    )
}

export default UserFrontPage;

