import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import { KidsFlyContext } from '../context/KidsFlyContext';
import { Link } from 'react-router-dom';

const AdminTripRequest = (props) => {
    const { currentUser } = useContext(KidsFlyContext);

    const [tripList, setTripList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`/trip/my/${currentUser.id}`)
        .then(res => setTripList(res.data))
        .catch(err => console.log(err.response))
    }, [props])

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Welcome, {currentUser.fullname}</h2>
                    <div className="mt-5 mb-5">&nbsp;</div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 8, offset: 2}} className="mb-5">
                    {
                        (!tripList.length && <h5 className="text-center">No Trips Created</h5>)
                    }
                    {
                        tripList.map(trip => 
                            <Link key={trip.id} to={`/MyTrips/${trip.id}`} className="btn btn-outline-dark btn-block p-3">
                                {trip.date} {trip.flight}
                            </Link>
                        )
                    }
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 8, offset: 2}}>
                    <Link to={`/Welcome`} className="btn btn-dark btn-block p-4">Main Menu</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminTripRequest;    