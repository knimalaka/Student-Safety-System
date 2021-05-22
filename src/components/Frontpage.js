import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function FrontPage() {  
    
      let history = useHistory();

      return(
          
        <div className="FrontPage">  
  
          <div className="Parent">
          <button onClick= {() => { history.push("./UserFrontPage"); }}>Parent</button>
          </div>
  
          <div className="Admin">
          <button onClick= {() => { history.push("./AdminFrontPage"); }}>Admin</button>
          </div>
  
          <div className="h2_1">
          <h2>STUDENT SAFETY</h2>
          </div>
  
  
        </div>
  
    )
  }
  
export default FrontPage;
  