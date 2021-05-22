import React, {useState,Component} from 'react';
import {useHistory} from "react-router-dom";
import img1 from '../Images/Main.png';

 
function AdminFrontPage(){

    let history = useHistory();

    return(
        
        <div className="UserFrontPage">

        <img src={img1} alt=""/>


        <div className="AdminLogin">
        <button onClick= {() => { history.push("./AdminLoginForm"); }}>Admin Login</button>
        </div>

        <div className="AdminSignup">
        <button onClick= {() => { history.push("./AdminSignupForm"); }}>Admin Signup</button>
        </div>

        <div className="h2_1">
        <h2>STUDENT SAFETY</h2>
        </div>
        
    </div>
           
    )
}

export default AdminFrontPage;

