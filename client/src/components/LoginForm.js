import React, {useState} from 'react'; 
import {useHistory} from "react-router-dom";
import img1 from '../Images/children3.png';
 
function LoginForm() {

    let history = useHistory();

    const adminUser = {
        email : "parent@parent.com",
        password : "1234"
      }
    
      const [user, setUser] = useState({email: ""});
      const [error, setError] = useState("");
    
      const Login = details => {
        console.log(details);
    
        if(details.email == adminUser.email && details.password == adminUser.password){
             return(

                history.push("./Home")

        );

        } else {
          console.log("Details do not match!");
          setError("Details do not match!");
        }
      }
    
      const Logout = () => {
        setUser({name: "", email: ""});
      }


    const[details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
    
    <div className="LoginForm"> 
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>): ""}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={e => 
                    setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => 
                    setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <div className="form-group">
                <input type="submit" value="LOGIN" />
                </div>

            </div>
        </form> 

    </div>       
        
    )
}

export default LoginForm;