import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import Axios from 'axios';

const schema = yup.object().shape({
    student_Name: yup.string().required(),
    password: yup.string().required().min(5),
});

function SignupForm(){

    const [Fist_NameReg, setFist_NameReg] = useState("");
    const [Second_NameReg, setSecond_NameReg] = useState("");
    const [Student_IDReg, setStudent_IDReg] = useState("");
    const [ClassReg, setClassReg] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [Parents_NameReg, setParents_NameReg] = useState("");
    const [Parents_Phone_NumberReg, setParents_Phone_NumberReg] = useState("");
    const [PasswordReg, setPasswordReg] = useState("");

const register = () => {
    Axios.post("http://localhost4000/student/add",{
    Fist_Name: Fist_NameReg,
    Second_Name: Second_NameReg,
    Student_ID: Student_IDReg,
    Class: ClassReg,
    Email: EmailReg,
    Parents_Name: Parents_NameReg,
    Parents_Phone_Number: Parents_Phone_NumberReg,
    Password: PasswordReg,
    }).then((response) => {
        console.log(response);
    });
};

const [error, setError] = useState("");

    return(

    <div className="SignupForm">
      <form>
        <div className="form-inner">
            <h2>Signup</h2>

                {(error != "") ? (<div className="error">{error}</div>): ""}

                <div className="form-group">
                    <label htmlFor="Fist_Name">First Name</label>
                    <input type="text" name="Fist_Name" id="Fist_Name" onChange={(e) => { 
                    setFist_NameReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Second_Name">Second Name</label>
                    <input type="text" name="Second_Name" id="Second_Name" onChange={(e) => { 
                    setSecond_NameReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Student_ID">Student ID</label>
                    <input type="text" name="Student_ID" id="Student_ID" onChange={(e) => { 
                    setStudent_IDReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Class">Class (Ex:1A)</label>
                    <input type="text" name="Class" id="Class" onChange={(e) => { 
                    setClassReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="Email" name="Email" id="Email" onChange={(e) => { 
                    setEmailReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Parents_Name">Parent's Name</label>
                    <input type="text" name="Parents_Name" id="Parents_Name" onChange={(e) => { 
                    setParents_NameReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Parents_Phone_Number">Parent's Phone Number</label>
                    <input type="text" name="Parents_Phone_Number" id="Parents_Phone_Number" onChange={(e) => { 
                    setParents_Phone_NumberReg(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="Password" name="Password" id="Password" onChange={(e) => { 
                    setPasswordReg(e.target.value);}}/>
                </div>

                <button className="btn" type="submit" onClick={register}>
                    SUBMIT
                </button>  

            </div>      
        </form>
    </div>

    );
};

export default SignupForm;
 

