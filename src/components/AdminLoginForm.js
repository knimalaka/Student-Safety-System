import React, {useState} from 'react'; 
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import Home from './Home';
import {useHistory} from "react-router-dom";
import img5 from '../Images/children5.png';
 
function AdminLoginForm() {

    let history = useHistory();

    const adminUser = {
        email : "admin@admin.com",
        password : "1234"
      }
    
      const [user, setUser] = useState({name:"",email: ""});
      const [error, setError] = useState("");
    
      const Login = details => {
        console.log(details);
    
        if(details.email == adminUser.email && details.password == adminUser.password){
             return(

                history.push("./AdminHome")

        );

        } else {
          console.log("Details do not match!");
          setError("Details do not match!");
        }
      }
    
      const Logout = () => {
        setUser({name: "", email: ""});
      }



    const[details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
    
    <div className="LoginForm">
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="admin-form-inner"><h2>Admin Login</h2></div>
                {(error != "") ? (<div className="error">{error}</div>): ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>  

        <div className="AdminLoginImage">
        <img src={img5}/>
        </div>

    </div>
        
    )
}

export default AdminLoginForm;