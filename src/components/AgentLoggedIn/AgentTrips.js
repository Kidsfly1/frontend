import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Container, Row, Col } from 'reactstrap';

const AgentTrips = () => {
    const [tripList, setTripList] = useState({});

    
    axiosWithAuth().get('/trip/admin')
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
    

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Welcome, Agent Smith</h2>
                    <div className="mt-5 mb-5">&nbsp;</div>
                </Col>
            </Row>
        </Container>
    )
}

export default AgentTrips;