import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';  
  
const schema = yup.object().shape({
  student_Name: yup.string().required(),
  password: yup.string().required().min(5),
});
  
function ProfileSettings(){
      
  const content={
  
      inputs: [
          {
            label: 'Current Password',
            name: 'password',
            type: "password",
          },
          {
              label:"Student Name",
              name: "student_Name",
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
              label: 'Phone Number',
              name: 'phone Number',
              type: PhoneInput,
          }

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
          <div className="profileSettingsh2">
          <h2>Edit Details</h2>
          </div>
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
              <div className="profileSettingsBtn" >
              <button type="SUBMIT">
                  UPDATE
              </button>     
              </div>
          </div>      
          </form>
  
          </div>
      );
  };
  
export default ProfileSettings;
  
  


