import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { Field, ErrorMessage } from 'formik';

const Step2 = (props) => {
    
    if(props.currentStep !== 2) {
        return null;
    }

    return (
        <>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Assign Agent</h2>
                </Col>
            </Row>
            <Row form>
                <Col xs="12" sm={{size: 8, offset: 2}}>
                    <FormGroup>
                        <Label htmlFor="selectedAgent">Select Agent</Label>
                        <Field as="select" id="selectedAgent" name="selectedAgent" className="form-control">
                            <option value="" disabled hidden></option>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </Field>
                    </FormGroup>
                </Col>
            </Row>
        </>
    )
}

export default Step2;