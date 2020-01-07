import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {withFormik ,Form, Field} from 'formik';

const FamWelcome = ({values, touched, errors, status}) =>{

  useEffect(() =>{
    console.log(status);
    
  }, [status])


  return(
    <div className='loginMainForm'>
      <Form>
        <div className='topbar'>
          <img/>
          <h1>KidsFly</h1>
          <img/>
        </div>
        <div></div>
        <div>
          <Link to={{pathname:'/'}} className='LnkBtn'>Book Agent</Link>
          <Link to={{pathname:'/'}} className='LnkBtn'>Status/Cancel</Link>
          <Link to={{pathname:'/', role:2}} className='FormLink'>Trips</Link>
        </div>
        <div>
          <Link to={{}} className="gethelp" >GetHelp</Link>
        </div>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  handleSubmit(values, {resetForm}){
    resetForm();
  }
})(FamWelcome);

export default FormikUserForm;