import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';

const LoginForm = ({values, errors, touched, stataus}) => {
    return (
        <>
        <Container>
            <Row>
                <Col xs="12" sm={{ size: 4, offset: 4}}>
                    <Form>
                        <FormGroup className="mt-5">
                            <Label htmlFor="username">Username</Label>
                            <Field id="username" name="username" type="text" placeholder="username" className="form-control" />
                            {touched.username && errors.username ? <small id="" className="form-text text-danger">{errors.username}</small> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Field id="password" name="password" type="password" placeholder="password" className="form-control" />
                            {touched.password && errors.password ? <small id="" className="form-text text-danger">{errors.password}</small> : null}
                        </FormGroup>
                        <FormGroup style={{textAlign: 'center'}}>
                              <Link to="/sign-up" style={{fontSize: '.9rem', color: 'black'}}>Sign up to be a KidsFly Connection</Link>
                        </FormGroup>
                        <Button color="secondary" type="submit" block className="mt-5">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

const LoginFormik = withFormik({
    mapPropsToValues: values => {
        return {
            username: values.username || '',
            password: values.password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('You\'ll need a username to login.'),
        password: Yup.string().min(8, 'Must be atleast 8 characters').required('Can\'t login without a password')
    }),
    handleSubmit(values, { props, resetForm, setStatus }) {
        axiosWithAuth().post('/user/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push("/another-spot");
            })
            .catch(err => console.log(err.response))
    }
})(LoginForm);

export default LoginFormik;