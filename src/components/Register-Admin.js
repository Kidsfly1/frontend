import React, { useState, useEffect } from 'react';
//import { Route, Redirect } from 'react-router-dom';
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
        <h2>KidsFly Connection</h2>
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
        <Field id='role_id' type='hidden' name='role_id' placeholder='3' />
        <button type='submit'>Sign Up</button>
      </Form>
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
      role_id: role || 3
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required.').max(225),
    password: Yup.string().required('Password is required. Min(8 Characters)').min(8),
    fullname: Yup.string().max(225),
    phone: Yup.string().max(20),
    address: Yup.string().max(225),
    state: Yup.string(),
    zip: Yup.number().positive().integer(),
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