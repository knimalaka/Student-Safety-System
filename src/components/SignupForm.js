import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(5),
});

function SignupForm(){
    
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

const {register, handleSubmit,errors} = useForm({
 
});

const onSubmit = (data) => console.log(data);
console.log(errors);

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
                        name={input.name} 
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
    );
};

export default SignupForm;
 

