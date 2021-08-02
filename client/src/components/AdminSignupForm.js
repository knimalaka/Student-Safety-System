import React from 'react';
import { useForm } from 'react-hook-form';
import {useHistory} from "react-router-dom";
import 'react-phone-number-input/style.css';

function AdminSignupForm(){
    
let history = useHistory();

const goToAdminFront = () => {
    history.push("./AdminHome")
};

const content={

    inputs: [
        {
            label:"Admin Name",
            name: "admin_Name",
            type: "text",
        },
        {
            label: 'Admin ID',
            name: 'admin_ID',
            type: "text",
        },
        {
            label: 'Email',
            name: 'email',
            type: "email",
        },
        {
            label: 'Phone Number',
            name: 'phone Number',
            type: "text",
        },
        {
            label: 'Password',
            name: 'password',
            type: "password",
        },
    ],
};

const {register, handleSubmit,errors} = useForm({
 
});

const onSubmit = (data) => console.log(data);
console.log(errors);

    return(

        <div className="AdminSignupForm">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-inner">

 
        <div className="AdminH2"><h2>Admin Signup</h2></div>
            {content.inputs.map((input, key) => {
                return( 
                <div key={key}>
                    <p>
                        <label className="label">{input.label}</label>
 
                    <div className="form-group">

                        <input 
                        name={input.name} 
                        className="input"
                        type={input.type}
                        {...register(input.label)}
                        />
                    </div>    
                    </p>
                  </div>
                );
            })}
            <div className="Adminbtn" >
            <button type="SUBMIT" onClick={goToAdminFront}>
                SUBMIT
            </button>     
            </div>
        </div>      
        </form>

        </div>
    );
};

export default AdminSignupForm;
 

