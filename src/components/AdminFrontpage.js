import React, {useState,Component} from 'react';
import {useHistory} from "react-router-dom";
import img1 from '../Images/Main.png';
import img2 from '../Images/children2.png';

 
function AdminFrontPage(){

    let history = useHistory();

    return(
        
        <div className="UserFrontPage">

        <div className="UserFrontPageLogo">
        <img src={img1} alt=""/>
        </div>


        <div className="AdminLogin">
        <button onClick= {() => { history.push("./AdminLoginForm"); }}>Admin Login</button>
        </div>
        
        <div className="UserFrontOr"><p>--------------- or ----------------</p></div>


        <div className="AdminSignup">
        <button onClick= {() => { history.push("./AdminSignupForm"); }}>Admin Signup</button>
        </div>

        <div className="h2_1">
        <h2>STUDENT SAFETY</h2>
        </div>
        
        <div className="UserFrontPageLogo2">
        <img src={img2} alt=""/>
        </div>
        
    </div>
           
    )
}

export default AdminFrontPage;

