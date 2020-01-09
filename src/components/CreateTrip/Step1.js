import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { Field, ErrorMessage } from 'formik'
const Step1 = (props) => {

    if(props.currentStep !== 1) {
        return null;
    }

    return (
        <>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Create Trip</h2>
                </Col>
            </Row>
            <Row form>
                <Col xs="12" sm={{size: 4, offset: 2}}>
                    <FormGroup>
                        <Label htmlFor="date">Departure Date</Label>
                        <Field id="date" name="date" type="text" className="form-control" placeholder="Departure Date" />
                        {/* {touched.departureDate && errors.departureDate ? <small id="" className="form-text text-danger">{errors.departureDate}</small> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="departure">Departure Time</Label>
                        <Field id="departure" name="departure" type="text" className="form-control" placeholder="Departure Time" />
                        {/* {touched.departure && errors.departure ? <small id="" className="form-text text-danger">{errors.departure}</small> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="airport">Airport</Label>
                        <Field id="airport" name="airport" type="text" className="form-control" placeholder="Airport" />
                        {/* {touched.airport && errors.airport ? <small id="" className="form-text text-danger">{errors.airport}</small> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="flight">Airline + Flight #</Label>
                        <Field id="flight" name="flight" type="text" className="form-control" placeholder="" />
                        {/* {touched.flight && errors.flight ? <small id="" className="form-text text-danger">{errors.flight}</small> : null} */}
                    </FormGroup>    
                </Col>

                <Col xs="12" sm="4">
                    <FormGroup>
                        <Label htmlFor="carryOn">Total Bags</Label>
                        <Field id="carryOn" name="carryOn" type="number" placeholder="" className="form-control" />
                        {/* {touched.carryOn && errors.carryOn ? <small id="" className="form-text text-danger">{errors.carryOn}</small> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="children">Children</Label>
                        <Field id="children" name="children" type="number" placeholder="" className="form-control" />
                        {/* {touched.children && errors.children ? <small id="" className="form-text text-danger">{errors.children}</small> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="agentReq">Preferred Agent</Label>
                        <Field as="select" id="agentReq" name="agentReq" className="form-control">
                            <option value="" disabled hidden></option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </Field>
                        {/* {touched.preferred && errors.preferred ? <small id="" className="form-text text-danger">{errors.preferred}</small> : null} */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="upgrades">Do you have any special needs?</Label>
                        <Field id="upgrades" name="upgrades" type="text" placeholder="" className="form-control" />
                        {/* {touched.special && errors.special ? <small id="" className="form-text text-danger">{errors.special}</small> : null} */}
                    </FormGroup>    
                </Col>
            </Row>
        </>
    )
}

export default Step1;