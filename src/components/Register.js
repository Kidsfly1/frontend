import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { withFormik, Form, Field} from  'formik';
import * as Yup from 'yup'
import Axios from 'axios';

const UserForm = ({values, touched, errors, status, role}) =>{
  const [user, setuser] = useState([]);
  useEffect(() =>{
    console.log(status);
    status && setuser(user => [...user, status]);
  }, [status]);

  //console.log(user);
  return (
    <div className='user-form'>
      <Form>
        <div className="topbar"></div>
        <h2>KidsFly</h2>
        <label htmlFor='username'>UserName:</label>
        <Field id='username' type='text' name='username' placeholder='User@gmail.com'/>
        <label htmlFor='password'>Password: (Must contain at least 8 characters)</label>
        <Field id='password' type='password' name='password' placeholder='Enter password here.'/>
        <label htmlFor='fullname'>Full Name:</label>
        <Field id='fullname' type='text' name='fullname' placeholder='First Last'/>
        <label htmlFor='phone'>Phone: Dashes are not required</label>
        <Field id='phone' type='text' name='phone' placeholder="(123)-456-7890"/>
        <label htmlFor='address'>Street Address:</label>
        <Field id='address' type='text' name='address' placeholder='00N 00E city'/>
        <label htmlFor='state'>State/Prov:</label>
        <Field id='state' type='text' name='state' placeholder='State/Prov'/>
        <label htmlFor="zip">Zip:</label>
        <Field id='zip' type='number' name='zip' placeholder='ZipCode'/>
        <Field id='role_id' type='hidden' name='role_id' placeholder='1' />
        <button type='submit'>Sign Up</button>
      </Form>
      <Link to={{pathname:'/Register_Connection', role:2}}>Sign Up as a KidsFly Connection</Link>
    </div>
  );

};

const FormikUserForm = withFormik({
  mapPropsToValues({username, password, fullname, phone, address, state, zip, role}) {
    return {
      username: username || '',
      password: password || '',
      fullname: fullname || '',
      phone: phone || '',
      address: address || '',
      state: state || '',
      zip: zip || 0,
      role_id: role || 1
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required.').max(225),
    password: Yup.string().required('Password is required. Min(8 Characters)').min(8),
    fullname: Yup.string().required('Your full name is required.').max(225),
    phone: Yup.string().required('Please Enter a valid phone number dashs are not required.').max(20),
    address: Yup.string().required('Please Enter a valid address.').max(225),
    state: Yup.string().required('Please Enter your State or Providence.'),
    zip: Yup.number().required().positive().integer(),
  }),

  handleSubmit(values, {setStatus, resetForm}){
    console.log(values);
    Axios
    .post('https://kids-fly2020.herokuapp.com/api/user/register', values)
    .then(resp =>{
      console.log(resp);
      resetForm();
    })
    .catch(err => console.log(err.resp));
  }
})(UserForm);

export default FormikUserForm;