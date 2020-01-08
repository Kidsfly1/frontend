import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const AgentTrips = (props) => {
    const [tripList] = useState(props.location.state);

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h3 className="mt-5 mb-5">Welcome, Agent Smith</h3>
                    <div className="mt-5 mb-5">&nbsp;</div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 8, offset: 2}}>
                    {
                        tripList.map(trip => 
                            <Link to={'/Agent-Trips/'+trip.id} className="btn btn-outline-dark btn-block">{trip.date} {trip.flight}</Link>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default AgentTrips;