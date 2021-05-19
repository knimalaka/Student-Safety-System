import React, {useState} from 'react'; 
import{ BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import Home from './Home';
import {useHistory} from "react-router-dom";
 
function LoginForm() {

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

                history.push("./Home")


                /*
                    <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                    </div>
                    
                */  
                   
                    
        

          /*setUser({
            name : details.name,
            email : details.email
            */
        
        /*
        <Switch>
            <Route path="/components/Home" component={Home} />
        </Switch>
        */

        

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

        /*
        (
        (user.email != "") ? (
            <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
            </div>
            ):(      
              <LoginForm Login={Login} error={error} />
            )
        ),
        */





    

        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
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
        
    )
}

export default LoginForm;