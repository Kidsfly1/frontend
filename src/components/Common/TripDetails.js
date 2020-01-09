import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

import { KidsFlyContext } from '../../context/KidsFlyContext';

const AgentTripDetails = (props) => {
    const [theTrip, setTheTrip] = useState({});
    const { currentUser } = useContext(KidsFlyContext);

    useEffect(() => {
        const tripId = props.computedMatch.params.id;

        axiosWithAuth().get(`/trip/${tripId}`)
            .then(res => setTheTrip(res.data))
            .catch(err => console.log(err))
    }, [props])

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h3 className="mt-5 mb-5">Trip Details</h3>
                    <div className="mt-5 mb-5">&nbsp;</div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="text-center">
                    <div>Date of Trip: {theTrip.date}</div>
                    <div>Depature Time: {theTrip.departure}</div>
                    <div>Children: </div>
                    <div>Airport: {theTrip.airport}</div>
                    <div>{/* Airline: {theTrip.air} */}</div>
                    <div>Flight #: {theTrip.flight}</div>
                    <div>Carry On: {theTrip.carryOn}</div>
                    <div>Agent Request: {theTrip.agentReq}</div>
                    <div>Special Needs: {theTrip.special}</div>
                    <div>Upgrade:</div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="text-center">
                    {
                        currentUser.role_id === 3 ? (
                            <>
                                <Link to="/Admin-Trip-Requests" className="btn btn-dark btn-block">Return to Trips</Link>
                                <Link to="/Admin" className="btn btn-outline-dark btn-block">Main Menu</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/Agent-Trips" className="btn btn-dark btn-block">Return to Trips</Link>
                                <Link to="/Agents" className="btn btn-outline-dark btn-block">Main Menu</Link>
                            </>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default AgentTripDetails;