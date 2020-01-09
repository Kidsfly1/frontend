import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { withFormik, Form, Field } from 'formik';
import { Formik, Form, Field , ErrorMessage} from 'formik';

import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { KidsFlyContext } from '../context/KidsFlyContext';

import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';

const LoginForm = (props) => {
    const {currentUser, setCurrentUser} = useContext(KidsFlyContext);

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center mt-5 mb-5">
                    <h1>Kidsfly</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{ size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        validate={values => {
                            const errors ={};
                            if(!values.username) {
                                errors.username = "Don't forget your username!"
                            }
                            if(!values.password) {
                                errors.password = "You'll need a username to login."
                            }
                            return errors
                        }}
                        onSubmit={(values) => {
                            axiosWithAuth().post('/user/login', values)
                                .then(res => {
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('user', JSON.stringify(res.data.user));
                                    
                                    setCurrentUser(res.data.user)

                                    if(res.data.user.role === 'admin'){
                                        props.history.push('/Admin');
                                    }else if(res.data.user.role === 'agent'){
                                        if(res.data.user.fullname == null){
                                            props.history.push('/UpdateInfo');
                                        }else{
                                            props.history.push('/Agents');
                                        }
                                    }else{
                                        if(res.data.user.fullname == null){
                                            props.history.push('/UpdateInfo');
                                        }else{
                                            props.history.push('/Welcome')
                                        }
                                        
                                    }
                                })
                                .catch(err => console.log('Error: ', err))
                        }}
                    >
                        <Form>
                            <FormGroup className="mt-5">
                                <Label htmlFor="username">Username</Label>
                                <Field id="username" name="username" type="text" placeholder="" className="form-control" />
                                <ErrorMessage name="username" component="div" className="form-text text-danger" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Field id="password" name="password" type="password" placeholder="" className="form-control" />
                                <ErrorMessage name="password" component="div" className="form-text text-danger" />
                            </FormGroup>
                            
                            <div className="text-center">
                                <Link to="/Register" style={{fontSize: '.9rem', color: 'black'}}>Sign up to use KidsFly for your travels</Link>
                            </div>
                            
                            <Button color="dark" type="submit" block className="mt-5 p-4">Login</Button>
                            
                            <div className="text-center mt-3">
                                <Link to="/Register-Agent" style={{fontSize: '.9rem', color: 'black'}}>Sign up to be a KidsFly Connection</Link>
                            </div>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm;