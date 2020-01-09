import React, { useState, useContext } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { KidsFlyContext } from '../context/KidsFlyContext';

const FamilyHome = () => {
    //const [tripList, setTripList] = useState();
    const {currentUser, setCurrentUser} = useContext(KidsFlyContext);
    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Welcome, {currentUser.fullname}</h2>
                    <div className="mt-5 mb-5">&nbsp;</div>
                    <Link to="/Create-Trip" className="btn btn-block btn-outline-dark mt-5 mb-1 p-4"> Create a Trip</Link>
                    {/* <Link to="/Agent-Trips" className="btn btn-block btn-outline-dark p-4"> Status/Cancel</Link> */}
                    <Link to="/MyTrips" className="btn btn-block btn-outline-dark p-4"> Trips</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default FamilyHome;