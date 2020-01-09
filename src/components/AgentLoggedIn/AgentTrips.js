import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { KidsFlyContext } from '../../context/KidsFlyContext';

const AgentTrips = (props) => {
    const {currentUser} = useContext(KidsFlyContext);
    const [tripList, setTripList] = useState({});

    useEffect(() => {
        axiosWithAuth().get(`/trip/agent`)
        .then(res => setTripList(res.data))
        .catch(err => console.log(err.response))
    }, [])

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
                    {/* { tripList.length &&
                        tripList.map(trip => 
                            <Link key={trip.id} to={'/Agent-Trip-Details/'+trip.id} className="btn btn-outline-dark btn-block">{trip.date} {trip.flight}</Link>
                        )
                    } */}
                </Col>
            </Row>
        </Container>
    )
}

export default AgentTrips;