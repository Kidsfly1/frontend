import React, { useState, useEffect } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { withFormik, Form, Field} from  'formik';
import * as Yup from 'yup'
import Axios from 'axios';

const UserForm = ({values, touched, errors, status}) =>{
  const [user, setuser] = useState([]);
  useEffect(() =>{
    console.log(status);
    status && setuser(user => [...user, status]);
  }, [status]);
  
  return (
    <div className='user-form'>
      <Form>
        <div className="topbar"></div>
        <label htmlFor='userName'>UserName:</label>
        <Field id='username' type='text' name='userName' placeholder='User@gmail.com'/>
        <label htmlFor='password'>Password: (Must contain at least 8 characters)</label>
        <Field id='password' type='password' name='password' placeholder='Enter password here.'/>
        <label htmlFor='email'>Email:</label>
        <Field id='email' type='text' name='email' placeholder='Enter email here.'/>
        <label htmlFor='fullName'>Full Name:</label>
        <Field id='fullname' type='text' name='fullName' placeholder='First Last'/>
        <label htmlFor='phone'>Phone: Dashes are not required</label>
        <Field id='phone' type='text' name='phone' placeholder="(123)-456-7890"/>
        <label htmlFor='address'>Street Address:</label>
        <Field id='address' type='text' name='address' placeholder='00N 00E city'/>
        <label htmlFor='state'>State/Prov:</label>
        <Field id='state' type='text' name='state' placeholder='State/Prov'/>
        <label htmlFor='zip' type='number' name='zip' placeholder='ZipCode'/>
        {/* <label className='checkbox-container'>
              <Field id='isAgent' type='checkbox' name = 'isAgent' checked={values.isAgent}/>
            </label> */}
        <button type='submit'>Sign Up</button>
      </Form>
      
    </div>
  );

};

const FormikUserForm = withFormik({
  mapPropsToValues({userName, password, email, fullName, phone, address, state, zip}) {
    return {
      userName: userName || '',
      password: password || '',
      email: email || '',
      fullName: fullName || '',
      phone: phone || '',
      address: address || '',
      state: state || '',
      zip: zip || 0
    };
  },
  validationSchema: Yup.object().shape({
    userName: Yup.string().required('Username is required.').max(225),
    password: Yup.string().required('Password is required. Min(8 Characters)').min(8),
    fullName: Yup.string().required('Your full name is required.').max(225),
    phone: Yup.string().required('Please Enter a valid phone number dashs are not required.').max(20),
    address: Yup.string().required('Please Enter a valid address.').max(225),
    state: Yup.string().required('Please Enter your State or Providence.'),
    zip: Yup.number().required().positive().integer(),
  }),

  handleSubmit(values, {setStatus}){
    console.log(values);
    Axios
    .post('https://kids-fly2020.herokuapp.com/api/user/register', values)
    .then(resp =>{
      console.log(resp);
    })
    .catch(err => console.log(err.resp));
  }
})(UserForm);

export default FormikUserForm;