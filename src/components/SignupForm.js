import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import img4 from '../Images/children4.png';


const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(5),
});

function SignupForm(){
    
const content={

    inputs: [
        {
            label:"Student Name",
            name: "student Name",
            type: "text",
        },
        {
            label: 'Student ID',
            name: 'student ID',
            type: "text",
        },
        {
            label: 'Class (Ex:1A)',
            name: 'class',
            type: "text",
        },
        {
            label: 'Date of birth',
            name: 'date of birth',
            type: "date",
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
            label: 'Parent Name',
            name: 'parent Name',
            type: "text",
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

        <div className="UserSignupForm">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-inner">

 
        <h2>Signup</h2>
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
            <button className="btn" type="SUBMIT">
                SUBMIT
            </button>     
        </div>      
        </form>

        <div className="SignupImage">
        <img src={img4}/>
        </div>

        </div>
    );
};

export default SignupForm;
 

