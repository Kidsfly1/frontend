import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Container, Row, Col, Button } from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const initialValues = {
    date: '',
    departure: '',
    airport: '',
    flight: '',
    carryOn: '',
    children: '',
    agentReq: '',
    special: '',
    upgrades: '',
    //selectedAgent: ''
  }

const CreateTrip = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [tripForm, setTripForm] = useState(initialValues);
    const [isSubmitting, setSubmitting] = useState(false);

    const handleChange = e => {
        setTripForm({
            ...tripForm,
            [e.target.name]: e.target.value
        })
    }

    const _next = () => {
        setCurrentStep(currentStep >= 3 ? 4 : currentStep + 1);
    }

    const _prev = () => {
        setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
    }

    return (
        <Container>
            <Row>
                <Col xs="12" sm={{size: 10, offset: 2}}></Col>
            </Row>
            <Formik initialValues={tripForm}
                validate={values => {
                    const errors ={};
                    if(!values.date) {
                        errors.date = 'Please select a Departure Date'
                    }
                    return errors
                }}
                onSubmit={(values, { props, setSubmitting }) => {
                    // console.log(values)
                    setSubmitting(true)
                    axiosWithAuth().post('/trip', values)
                        .then(res => {
                            setCurrentStep(4)
                            setSubmitting(false)
                        })
                        .catch(err => console.log(err.message))
                }}
            >
                {({values, errors, touched, status}) => (
                    <Form>
                        <Step1 currentStep={currentStep} handleChange={handleChange} tripDetails={values} tripErrors={errors} tripTouched={touched} tripStatus={status} />
                        {/* <Step2 currentStep={currentStep} handleChange={handleChange} tripDetails={values} tripErrors={errors} tripTouched={touched} tripStatus={status} /> */}
                        <Step3 currentStep={currentStep} handleChange={handleChange} tripDetails={values} tripErrors={errors} tripTouched={touched} tripStatus={status} />
                        <Step4 currentStep={currentStep} tripDetails={values} />
                    
                        {currentStep === 2 && <Button type="submit" color="dark" block className="mt-5 mb-1 p-4">Book Trip</Button>}
                        
                        {currentStep < 2 && currentStep !== 2 && <Button onClick={() => _next()} color="dark" block className="mt-5 mb-1 p-4">Continue</Button>}
                        {currentStep !== 1 && currentStep !== 3 && <Button onClick={() => _prev()} color="dark" block>Go Back</Button>}
                        {currentStep === 1 && <Link to="/Welcome" className="btn btn-outline-dark btn-block mb-1 p-4">Cancel</Link>}

                        {currentStep === 3 && <Link to="/Welcome" className="btn btn-dark btn-block mt-5 mb-1 p-4">Main Menu</Link>}
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default CreateTrip;