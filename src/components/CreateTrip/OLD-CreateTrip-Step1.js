import React, { useContext } from 'react'
import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import { withFormik, Form, Field } from 'formik'
// import * as Yup from 'yup';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

import { CreateTripContext } from '../../context/CreateTripContext';

const CreateTrip = ({values, errors, touched, stataus}) => {
    
    const {newTripForm, updateTripForm} = useContext(CreateTripContext);

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Create Trip</h2>
                </Col>
            </Row>
            {/* <Form> */}
                <Row form>
                    <Col xs="12" sm={{size: 4, offset: 2}}>
                        <FormGroup>
                            <Label htmlFor="departureDate">Departure Date</Label>
                            <Field id="departureDate" name="departureDate" type="text" placeholder="Departure Date" className="form-control" onChange={updateTripForm} />
                            {touched.departureDate && errors.departureDate ? <small id="" className="form-text text-danger">{errors.departureDate}</small> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="departureTime">Departure Time</Label>
                            <Field id="departureTime" name="departureTime" type="text" placeholder="Departure Time" className="form-control" />
                            {touched.departureTime && errors.departureTime ? <small id="" className="form-text text-danger">{errors.departureTime}</small> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="airport">Airport</Label>
                            <Field id="airport" name="airport" type="text" placeholder="Airport" className="form-control"></Field>
                            {touched.airport && errors.airport ? <small id="" className="form-text text-danger">{errors.airport}</small> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="airlineFlight">Airline + Flight #</Label>
                            <Field id="airlineFlight" name="airlineFlight" type="text" placeholder="airlineFlight" className="form-control"></Field>
                            {touched.airlineFlight && errors.airlineFlight ? <small id="" className="form-text text-danger">{errors.airlineFlight}</small> : null}
                        </FormGroup>    
                    </Col>

                    <Col xs="12" sm="4">
                        <FormGroup>
                            <Label htmlFor="totalBags">Total Bags</Label>
                            <Field id="totalBags" name="totalBags" type="number" placeholder="0" className="form-control"></Field>
                            {touched.totalBags && errors.totalBags ? <small id="" className="form-text text-danger">{errors.totalBags}</small> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="children">Children</Label>
                            <Field id="children" name="children" type="number" placeholder="0" className="form-control"></Field>
                            {touched.children && errors.children ? <small id="" className="form-text text-danger">{errors.children}</small> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="preferred">Preferred Agend Request (Male or Female)</Label>
                            <Field id="preferred" name="preferred" type="text" placeholder="preferred" className="form-control"></Field>
                            {touched.preferred && errors.preferred ? <small id="" className="form-text text-danger">{errors.preferred}</small> : null}
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="specialNeeds">Do you have any special Needs?</Label>
                            <Field id="specialNeeds" name="specialNeeds" type="text" placeholder="specialNeeds" className="form-control"></Field>
                            {touched.specialNeeds && errors.specialNeeds ? <small id="" className="form-text text-danger">{errors.specialNeeds}</small> : null}
                        </FormGroup>    
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm={{size: 8, offset: 2}}>
                        <Button type="submit" block> Continue </Button>
                    </Col>
                </Row>
            {/* </Form> */}
        </Container>
    )
}

const CreateTripFormik = withFormik({
    mapPropsToValues: values => {
        return {
            departureDate: values.departureDate || '',
            departureTime: values.departureTime || '',
            airport: values.airport || '',
            airlineFlight: values.airlineFlight || '',
            totalBags: values.totalBags || '',
            children: values.children || '',
            preferred: values.preferred || '',
            specialNeeds: values.specialNeeds || ''
        }
    },
    handleSubmit(values, {props}){
        console.log(values)
        // axiosWithAuth().post('/api/', values)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err.response))
        props.history.push('/Create-Trip-Step-2');
    }
})(CreateTrip)

export default CreateTripFormik;