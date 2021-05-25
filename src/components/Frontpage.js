import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import img2 from '../Images/parent.png';
import img3 from '../Images/admin2.png';


function FrontPage() {  
    
      let history = useHistory();

      return(
          
        <div className="FrontPage">  

        
          <div className="h2_1">
          <h2>STUDENT SAFETY</h2>
          </div>
  
          <div className="Parent">
          <button2 onClick= {() => { history.push("./UserFrontPage"); }}><img src={img2}/>Parent</button2>
          </div>
  
          <div className="Admin">
          <button3 onClick= {() => { history.push("./AdminFrontPage"); }}><img src={img3}/>Admin</button3>
          </div>
  
  
        </div>
  
    )
  }
  
export default FrontPage;
  