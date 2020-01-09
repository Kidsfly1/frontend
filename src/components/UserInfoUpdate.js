import React, { useState, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage} from  'formik';
import * as Yup from 'yup'
import Axios from 'axios';
import './register.css'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { KidsFlyContext } from '../context/KidsFlyContext';

const UserForm = (props) =>{
  const [user, setuser] = useState([]);

  const {currentUser, setCurrentUser, updateLoggedInUser} = useContext(KidsFlyContext);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  },[currentUser]);
  
  return (
    <Container>
      <Row>
        <Col xs="12" className="text-center">
          <h2 className="mt-5 mb-2">Account Info</h2>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm={{ size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
          <Formik
            initialValues={{fullname: '', phone: '', address: '', state: '', zip: 0}}
            validate={values => {
              const errors = {};
              if(!values.fullname){
                errors.fullname = "Please enter your full name, middle names not required.";
              }
              if(!values.phone){
                errors.phone = "Please enter a phone number that you may be contacted at.";
              }
              if(!values.address){
                errors.address = "Please enter your street address \"123 N 200 E City\"";
              }
              if(!values.state){
                errors.state = "Please enter valid State name or Providence name."
              }
              if(values.zip = 0){
                errors.state = "Please enter your zip code, extention not required"
              }
              return errors;
            }}
            onSubmit={(values) => {
              axiosWithAuth()
              .put(`/user/${currentUser.id}`, values)
              .then(res =>{
                console.log(currentUser);
                console.log(res)
                setCurrentUser(
                  {...currentUser, 
                    fullname: values.fullname, 
                    phone: values.phone, 
                    address: values.address, 
                    state: values.state, 
                    zip: values.zip
                  }
                )
                
                if (currentUser.role === 'family'){
                  props.history.push('/Welcome')
                }
                if (currentUser.role === 'agent'){
                  props.history.push('/Agents')
                }
                if (currentUser.role === 'admin'){
                  props.history.push('/Admin')
                }
              })
              .catch(err => {
                console.log(err)});
            }
          }
          >
            <Form>
              <FormGroup className='FGroup mt-5'>
                <Label htmlFor='fullname'>Full Name:</Label>
                <Field id='fullname' type='text' name='fullname' placeholder='First Last' className='form-control'/>
                <ErrorMessage name="fullname" component="div" className="form-text text-danger" />
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor='phone'>Phone: Dashes are not required</Label>
                <Field id='phone' type='text' name='phone' placeholder="(123)-456-7890" className='form-control'/>
                <ErrorMessage name="phone" component="div" className="form-text text-danger" />
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor='address'>Street Address:</Label>
                <Field id='address' type='text' name='address' placeholder='00N 00E city' className='form-control'/>
                <ErrorMessage name="address" component="div" className="form-text text-danger" />
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor='state'>State/Prov:</Label>
                <Field id='state' type='text' name='state' placeholder='State/Prov' className='form-control'/>
                <ErrorMessage name="state" component="div" className="form-text text-danger" />
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor="zip">Zip:</Label>
                <Field id='zip' type='number' name='zip' placeholder='ZipCode' className='form-control' />
                <ErrorMessage name="zip" component="div" className="form-text text-danger" />
              </FormGroup>
              <Field id='role' type='hidden' name='role' placeholder='Admin' className='form-control' />
              <Button type='submit' block className="mt-5">Update</Button>
              <Link to="/Welcome" className="btn btn-block btn-outline-dark p-4">Cancel</Link>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );

};

export default UserForm;