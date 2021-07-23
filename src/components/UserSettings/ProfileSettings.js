import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
  
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
              label:"First Name",
              name: "first_Name",
              type: "text",
          },
          {
            label: 'Second Name',
            name: 'second_name',
            type: "text",
            },
          {
              label: 'Class (Ex:1A)',
              name: 'class',
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
          }

      ],
  };
  
const {register, handleSubmit,errors} = useForm({
   
});
  
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  
    return(
  
      <div className="ProfileSettings">
        <formp  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-inner">
          <div className="profileSettingsh2">
          <h2>Edit Details</h2>
          </div>
              {content.inputs.map((input, key) => {
                  return( 
                  <div className="form-group" key={key}>
                      <p>
                          <label className="label">{input.label}</label>

                      <div >
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
          </formp>
  
          </div>
      );
  };
  
export default ProfileSettings;
  
  


