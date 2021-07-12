import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import img4 from '../Images/children4.png';


const schema = yup.object().shape({
    admin_Name: yup.string().required(),
    password: yup.string().required().min(5),
});

function AdminSignupForm(){
    
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
            label: 'Address',
            name: 'address',
            type: "text",
        },
        {
            label: 'Email addresss',
            name: 'email address',
            type: "email",
        },
        {
            label: 'Phone Number',
            name: 'phone Number',
            type: PhoneInput,
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
                    </p>
                    <p>
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
            <button className="Adminbtn" type="SUBMIT">
                SUBMIT
            </button>     
        </div>      
        </form>

        <div className="AdminSignupImage">
        <img src={img4}/>
        </div>

        </div>
    );
};

export default AdminSignupForm;
 

