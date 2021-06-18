import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
  
function SignupForm(){
const {register, handleSubmit, errors} = useForm();
const onSubmit = (data) => console.log(data);

const content={
    inputs: [
        {
            label:'Username',
            name: 'username',
            type: "text",
        },
        {
            label: 'Password',
            name: 'password',
            type: "password",
        },
    ],
};

    return(
        <div className="UserSignupForm">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <h2>Signup</h2>
            {content.inputs.map((input, key) => {
                return( 
                <div key={key}>
                    <p>
                        <label className="label">{input.label}</label>
                    </p>
                    <p>
                        <input 
                        name={input.label} 
                        className="input"
                        type={input.type}
                        {...register(input.label)}
                        />
                    </p>
                </div>
                );
            })}
            <button className="btn" type="submit">
                submit
            </button>           
        </form>
        </div>
    )
}

export default SignupForm;
 

