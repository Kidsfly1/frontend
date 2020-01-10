import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import { KidsFlyContext } from '../context/KidsFlyContext';
import { Link } from 'react-router-dom';
import { Field } from 'formik';

const AdminTripRequest = (props) => {
    const { currentUser } = useContext(KidsFlyContext);

    const [tripList, setTripList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`/trip/my/${currentUser.id}`)
        .then(res => setTripList(res.data))
        .catch(err => console.log(err.response))
    }, [props])

    const sortTrips = e => {
        if (e.target.value === 'date'){
            setTripList(tripList.sort((a,b) => (a.date > b.date) ? 1 : -1))
        } else {
            setTripList(tripList.sort((a,b) => (a.flight > b.flight) ? 1 : -1))
        }
    }

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Welcome, {currentUser.fullname}</h2>
                    <div className="mt-5 mb-5">&nbsp;</div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 2, offset: 8}} className="text-right mb-3">
                    <Input name="sort" id="sort" type="select" onChange={sortTrips}>
                        <option value=""></option>
                        <option value="date">Date</option>
                        <option value="flight">Flight</option>
                    </Input>
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