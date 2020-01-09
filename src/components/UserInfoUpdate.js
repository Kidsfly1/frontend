import React, { useState, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Form, Field} from  'formik';
import * as Yup from 'yup'
import Axios from 'axios';
import './register.css'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { KidsFlyContext } from '../context/KidsFlyContext';

const UserForm = (props) =>{
  const [user, setuser] = useState([]);
  const {currentUser, setCurrentUser} = useContext(KidsFlyContext);
  // useEffect(() =>{
  //   console.log(status);
  //   status && setuser(user => [...user, status]);
  // }, [status]);

  //console.log(user);
  return (
    <Container>
      <Row>
        <Col xs="12" sm={{ size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
          <Formik
            initialValues={{fullname: '', phone: '', address: '', state: '', zip: 0}}
            onSubmit={(values) =>{
              console.log(values);
              console.log(currentUser);
              
              axiosWithAuth()
              .put(`/user/${currentUser.id}`, values)
              .then(res =>{
                setCurrentUser({...currentUser, fullname: values.fullname, phone: values.phone, address: values.address, state: values.state, zip: values.zip})
                
                console.log(currentUser);
                if (currentUser.role_id === 1){
                  props.history.push('/Welcome')
                }
                if (currentUser.role_id === 2){
                  props.history.push('/Agent')
                }
                console.log(res);
              })
              .catch(err => {
                console.log(err)});
            }
          }
          >
            <Form>
            <div className='iFormContainer'>
              {/* <FormGroup className='FGroup'>
                <Label htmlFor='username'>UserName:</Label>
                <Field id='username' type='text' name='username' placeholder='User@gmail.com' className='txtbox'/>
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor='password'>Password: (Must contain at least 8 characters)</Label>
                <Field id='password' type='password' name='password' placeholder='Enter password here.' className='txtbox'/>
              </FormGroup> */}
              <FormGroup className='FGroup mt-5'>
                <Label htmlFor='fullname'>Full Name:</Label>
                <Field id='fullname' type='text' name='fullname' placeholder='First Last' className='form-control'/>
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor='phone'>Phone: Dashes are not required</Label>
                <Field id='phone' type='text' name='phone' placeholder="(123)-456-7890" className='form-control'/>
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor='address'>Street Address:</Label>
                <Field id='address' type='text' name='address' placeholder='00N 00E city' className='form-control'/>
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor='state'>State/Prov:</Label>
                <Field id='state' type='text' name='state' placeholder='State/Prov' className='form-control'/>
              </FormGroup>
              <FormGroup className='FGroup'>
                <Label htmlFor="zip">Zip:</Label>
                <Field id='zip' type='number' name='zip' placeholder='ZipCode' className='form-control' />
              </FormGroup>
              <Field id='role_id' type='hidden' name='role_id' placeholder='1' className='form-control' />
              <Button type='submit' block className="mt-5">Submit</Button>
            </div>
            
          </Form>
          </Formik>

        </Col>
      </Row>
    </Container>
  );

};

// const FormikUserForm = withFormik({

//   mapPropsToValues({ fullname, phone, address, state, zip}) {
//     return {
//       fullname: fullname || '',
//       phone: phone || '',
//       address: address || '',
//       state: state || '',
//       zip: zip || 0
//     };
//   },
//   validationSchema: Yup.object().shape({
//     fullname: Yup.string().required().max(225),
//     phone: Yup.string().required().max(20),
//     address: Yup.string().required().max(225),
//     state: Yup.string().required(),
//     zip: Yup.number().required().positive().integer(),
//   }),

//   handleSubmit(values, { props, setCurrentUser, currentUser}){
    
//     console.log(currentUser);
//     axiosWithAuth()
//     .post(`/user/${currentUser.id}`, values)
//     .then(res =>{
//       setCurrentUser(res.data.user)
//       if (currentUser.role_id === 1){
//         props.history.push('/Welcome')
//       }
//       if (currentUser.role_id === 2){
//         props.history.push('/Agent')
//       }
//       console.log(res);
//     })
//     .catch(err => {
//       alert(err.res)
//       console.log(err.res)});
//   }
// })(UserForm);

export default UserForm;