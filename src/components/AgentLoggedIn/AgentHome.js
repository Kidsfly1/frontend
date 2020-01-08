import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const AgentHome = () => {
    const [tripList, setTripList] = useState();

    useEffect(() => {
        axiosWithAuth().get('/trip/admin')
        .then(res => setTripList(res.data))
        .catch(err => console.log(err.response))
    }, [])
    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Welcome, Agent Smith</h2>
                    <div className="mt-5 mb-5">&nbsp;</div>
                    <Link to={{pathname: '/Agent-Trips', state: tripList}} className="btn btn-dark btn-block mt-5 mb-1"> View Assigned Trips</Link>
                    <Link to="/Agent-Trips" className="btn btn-block btn-outline-dark"> Completed Trips</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default AgentHome;