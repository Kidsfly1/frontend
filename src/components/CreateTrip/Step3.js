import React from 'react';
import { Row, Col } from 'reactstrap';

const Step3 = (props) => {
    
    if(props.currentStep !== 2) {
        return null;
    }

    return (
        <>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Trip Details</h2>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 6, offset: 3}}>
                    <div>Agent Assigned: </div>
                    <div>Date of Trip: {props.tripDetails.date}</div>
                    <div>Airport: {props.tripDetails.airport}</div>
                    <div>Flight #:  {props.tripDetails.flight}</div>
                    <div>Departure Time: {props.tripDetails.departure}</div>
                    <div>Baggage: {props.tripDetails.carryOn}</div>
                    <div>Children: {props.tripDetails.children}</div>
                    <div>Agent Request: {props.tripDetails.agentReq}</div>
                    <div>Special Needs: {props.tripDetails.upgrades}</div>
                </Col>
            </Row>
        </>
    )
}

export default Step3;