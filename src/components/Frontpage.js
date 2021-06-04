import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import img1 from '../Images/Main.png';
import img2 from '../Images/parent.png';
import img3 from '../Images/admin2.png';

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
          <button onClick= {() => { history.push("./UserFrontPage"); }}><div><img src={img2}/></div><div className="ParentWord">Parent</div></button>
          </div>
  
          <div className="Admin">
          <button onClick= {() => { history.push("./AdminFrontPage"); }}><div><img src={img3}/></div><div className="AdminWord">Admin</div></button>
          </div>
  
          </div>                      
  
    )
  }
  
export default FrontPage;
  