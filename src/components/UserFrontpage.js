import React, {useState,Component} from 'react';
import {useHistory} from "react-router-dom";
import img1 from '../Images/Main.png';
import img2 from '../Images/children2.png';

 
function UserFrontPage(){

    let history = useHistory();

    return(
        
    <div className="UserFrontPage">

        <div className="UserFrontPageLogo">
        <img src={img1} alt=""/>
        </div>

        <div className="Login">
        <button onClick= {() => { history.push("./LoginForm"); }}><span>Login</span></button>
        </div>

        <div className="UserFrontOr"><p>--------------- or ----------------</p></div>

        <div className="Signup">
        <button onClick= {() => { history.push("./SignupForm"); }}><span>Signup</span></button>
        </div>

        <link href="//db.onlinewebfonts.com/c/3907276073752a03016016622e01a154?family=Cassannet+Regular" 
        rel="stylesheet" type="text/css"/>
        
        <div className="h2_1">
        <h2>STUDENT SAFETY</h2>
        </div>

        <div className="UserFrontPageLogo2">
        <img src={img2} alt=""/>
        </div>

    </div>
           
    )
}

export default UserFrontPage;

