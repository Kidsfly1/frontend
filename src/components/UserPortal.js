import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {withFormik ,Form, Field} from 'formik';

const LoginMain = ({values, touched, errors, status}) =>{

  useEffect(() =>{
    console.log(status);
    
  }, [status])


  return(
    <div className='loginMainForm'>
      <Form>
        <div className='topbar'></div>
        <h2>KidsFly</h2>
        <Link to={{pathname:'/login'}} className='SigninBtn'>Sign In</Link>
        <Link to={{pathname:'/Register'}} className='SignupBtn'>Sign Up</Link>
        <Link to={{pathname:'/Register_Connection', role:2}} className='FormLink'>Sign Up as a KidsFly Connection</Link>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  handleSubmit(values, {resetForm}){
    resetForm();
  }
})(LoginMain);

export default FormikUserForm;