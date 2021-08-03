import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import 'react-phone-number-input/style.css';
import Axios from 'axios';

function AdminSignupForm(){

let history = useHistory();

const [Admin_NameReg, setAdmin_NameReg] = useState("");
const [Admin_IDReg, setAdmin_IDReg] = useState("");
const [EmailReg, setEmailReg] = useState("");
const [Phone_NumberReg, setPhone_NumberReg] = useState("");
const [PasswordReg, setPasswordReg] = useState("");

const goToUserFront = () => {
    history.push("./Home")
};

const register = (event) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
      }

    event.preventDefault();
    console.log("registerd successfully!")
    Axios.post("http://localhost:4000/admin/add",{
    Admin_Name: Admin_NameReg,
    Admin_ID: Admin_IDReg,
    Email: EmailReg,
    Phone_Number: Phone_NumberReg,
    Password: PasswordReg,
    },{
        headers :headers
    }).then((response) =>{
        console.log(response);
        history.push("./AdminHome");
    })
};

const [error, setError] = useState("");

    return(

    <div className="AdminSignupForm">
      <form>
        <div className="form-inner">
            <h2>Signup</h2>

                {(error != "") ? (<div className="error">{error}</div>): ""}

                <div className="form-group">
                    <label htmlFor="Admin_Name">Admin Name</label>
                    <input type="text" name="Admin_Name" id="Admin_Name" onChange={(e) => { 
                    setAdmin_NameReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Admin_ID">Admin ID</label>
                    <input type="text" name="Admin_ID" id="Admin_ID" onChange={(e) => { 
                    setAdmin_IDReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="Email" name="Email" id="Email" onChange={(e) => { 
                    setEmailReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Phone_Number">Phone Number</label>
                    <input type="text" name="Phone_Number" id="Phone_Number" onChange={(e) => { 
                    setPhone_NumberReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="Password" name="Password" id="Password" onChange={(e) => { 
                    setPasswordReg(e.target.value);}}/>
                </div>

                <button className="btn" type="button" onClick={((e)=>register(e))}>
                    SUBMIT
                </button>  

            </div>      
        </form>
    </div>

    );
};

export default AdminSignupForm;

 

