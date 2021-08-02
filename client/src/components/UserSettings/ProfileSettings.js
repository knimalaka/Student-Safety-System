import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-phone-number-input/style.css';
import Axios from 'axios';
  
function ProfileSettings(){
      
  const [Fist_NameReg, setFist_NameReg] = useState("");
  const [Second_NameReg, setSecond_NameReg] = useState("");
  const [Student_IDReg, setStudent_IDReg] = useState("");
  const [ClassReg, setClassReg] = useState("");
  const [EmailReg, setEmailReg] = useState("");
  const [Parents_NameReg, setParents_NameReg] = useState("");
  const [Parents_Phone_NumberReg, setParents_Phone_NumberReg] = useState("");
  const [PasswordReg, setPasswordReg] = useState("");

const register = () => {
    Axios.put("http://localhost4000/student/edit",{
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
  
const {handleSubmit,errors} = useForm({
   
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
  
  


