import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import img2 from '../Images/parent.png';
import img3 from '../Images/admin2.png';


function FrontPage() {  
    
      let history = useHistory();

      return(
          
        <div className="FrontPage">  
  
          <div className="Parent">
          <button onClick= {() => { history.push("./UserFrontPage"); }}><img src={img2}/>Parent</button>
          </div>
  
          <div className="Admin">
          <button onClick= {() => { history.push("./AdminFrontPage"); }}><img src={img3}/>Admin</button>
          </div>
  
          <div className="h2_1">
          <h2>STUDENT SAFETY</h2>
          </div>
  
  
        </div>
  
    )
  }
  
export default FrontPage;
  