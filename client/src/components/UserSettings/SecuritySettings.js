import React, {useState} from 'react';
import { useHistory } from 'react-router';

function SecuritySettings(){

    let history = useHistory();

    const currentPassword = {
        password : "1234"
    } 

    const changingPassword = {
        newPassword : "",
        confirmPassword : ""
    }

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const ChangePassword = details => {
        console.log(details);


    if(details.password == currentPassword.password && 
        changingPassword.newPassword == changingPassword.confirmPassword){
            return(
                setPassword({password : details.password}),
                console.log("Hooooray"),
                setError("Hooooray")
            );
    }else{
        console.log("Password do not match!");
        setError("Password do not match!");
    }

}

    const[details, setDetails] = useState({password:"", newPassword:"",confirmPassword:""});
  
    const submitHandler = e => {
        e.preventDefault();

        ChangePassword(details);
    }


    return(

    <div className="SecuritySettings"> 
        <formp onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Change Password</h2>
                {(error != "") ? (<div className="error">{error}</div>): ""}

                <div className="form-group">
                    <label htmlFor="password">Current Password: </label>
                    <input type="password" name="password" id="password" 
                    onChange={e => setDetails({...details, password: e.target.value})} 
                    value={details.password}/>
                </div>

                <div className="form-group">
                    <label htmlFor="newPassword">New Password: </label>
                    <input type="password" name="newPassword" id="newPassword" 
                    onChange={e => setDetails({...details, newPassword: e.target.value})} 
                    value={details.newPassword}/>
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" 
                    onChange={e => setDetails({...details, confirmPassword: e.target.value})} 
                    value={details.confirmPassword}/>
                </div>
                
                <input type="submitPassword" value="Change Password" />
            </div>
        </formp> 


    </div>       
        
    )
}

export default SecuritySettings;

