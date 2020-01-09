import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import { withFormik, Form, Field} from  'formik';
import * as Yup from 'yup'
import Axios from 'axios';

const UserForm = ({props, values, touched, errors, status, role}) =>{
  const [user, setuser] = useState([]);
  // useEffect(() =>{
  //   console.log(status);
  //   status && setuser(user => [...user, status]);
  // }, [status]);
  //console.log(user);
  return (
    <Container>
      <Row form>
        <Col xs="12" sm={{ size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
          <Form>
              <FormGroup className='mt-5'>
                <Label htmlFor='username'>UserName:</Label>
                <Field id='username' type='text' name='username' placeholder='User@gmail.com' className='form-control'/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password: (Must contain at least 8 characters)</Label>
                <Field id='password' type='password' name='password' placeholder='Enter password here.' className='form-control'/>
              </FormGroup>
              <Field id='role_id' type='hidden' name='role_id' placeholder='1' className='txtbox' />
              <Button color="dark" type="submit" block className="mt-5">Submit</Button>
              <div className="text-center mt-3">
                  <Link to="/Register-Agent" style={{fontSize: '.9rem', color: 'black'}}>Sign up to be a KidsFly Connection</Link>
              </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({username, password, role_id}) {
    return {
      username: username || '',
      password: password || '',
      role_id: role_id || 3
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required.').max(225),
    password: Yup.string().required('Password is required. Min(8 Characters)').min(8)
  }),
  handleSubmit(values, { props, setStatus, resetForm}){
    console.log(values);
    Axios
    .post('https://kids-fly2020.herokuapp.com/api/user/register', values)
    .then(resp =>{
      props.history.push('/Login')
      console.log(resp);
      // resetForm();
    })
    .catch(err => console.log(err.resp));
  }
})(UserForm);
export default FormikUserForm;





