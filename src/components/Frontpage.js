import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import img1 from '../Images/Main.png';
import img2 from '../Images/parent4.png';
import img3 from '../Images/parent2.png';

function FrontPage() {  
    
      let history = useHistory();

      return(
          
        <div className="FrontPage">  

        <link href="//db.onlinewebfonts.com/c/3907276073752a03016016622e01a154?family=Cassannet+Regular" 
        rel="stylesheet" type="text/css"/>

          <div className="FrontPageLogo">
          <img src={img1}/>
          </div>
        
          <div className="h2_1">
          <h2>STUDENT</h2>
          </div>

          <div className="h2_2">
          <h2>SAFETY</h2>
          </div>
  
          <div className="Parent">
          <button onClick= {() => { history.push("./UserFrontPage"); }}>
          <div className="imageParent"><img src={img2}/><p>Parent</p></div></button>
          </div>
  
          <div className="Admin">
          <button onClick= {() => { history.push("./AdminFrontPage"); }}>
          <div className="imageAdmin"><img src={img3}/><p>Admin</p></div></button>
          </div>
  
          </div>                      
  
    )
  }
  
export default FrontPage;
  