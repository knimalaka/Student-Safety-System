import React, {useState} from 'react'; 
import {useHistory} from "react-router-dom";
import img1 from '../Images/children3.png';
import Axios from "axios";
 
function LoginForm() {

  let history = useHistory();

  const [EmailReg, setEmailReg] = useState("");
  const [PasswordReg, setPasswordReg] = useState("");

  const [error, setError] = useState("");
    
  const login = (event) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
      }

    event.preventDefault();
    console.log("login started!")
    Axios.post("http://localhost:4000/student/login",{
    Email: EmailReg,
    Password: PasswordReg,
    },{
        headers :headers
    }).then((response) =>{

        if(response.data.message){
          setError(response.data.message);
        }else{
          history.push("./Home");
        }
      });
  };


  return (
    
    <div className="LoginForm"> 
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>): ""}

                <div className="form-group">
                    <label htmlFor="EmailReg">Email</label>
                    <input type="email" name="EmailReg" id="EmailReg" onChange={e => 
                    setEmailReg(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="PasswordReg">Password</label>
                    <input type="password" name="PasswordReg" id="PasswordReg" onChange={e => 
                    setPasswordReg(e.target.value)}/>
                </div>
                
                <div className="form-group">
                <input value="LOGIN" type="submit" onClick={login} />
                </div>

            </div>
        </form> 

    </div>       
        
    )
}

export default LoginForm;