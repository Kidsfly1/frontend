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

    // if (currentUser.role !== 'admin' || currentUser.role !== 'agent') {
    //     props.history.push('/Welcome');
    //     return null
    // }

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h3 className="mt-5 mb-5">Trip Details</h3>
                    <div className="mt-5 mb-5">&nbsp;</div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
                    <div className="p-2" style={{border: '1px solid #1d1c1c'}}>
                        <div>Date of Trip: <div style={{float: 'right'}}>{theTrip.date}</div></div>
                        <div>Depature Time: <div style={{float: 'right'}}>{theTrip.departure}</div></div>
                        <div>Children:<div style={{float: 'right'}}>{theTrip.children}</div></div>
                        <div>Airport: <div style={{float: 'right'}}>{theTrip.airport}</div></div>
                        {/* <div>Airline: {theTrip.air}</div> */}
                        <div>Flight #: <div style={{float: 'right'}}>{theTrip.flight}</div></div>
                        <div>Carry On: <div style={{float: 'right'}}>{theTrip.carryOn}</div></div>
                        <div>Agent Request: <div style={{float: 'right'}}>{theTrip.agentReq}</div></div>
                        <div>Special Needs: <div style={{float: 'right'}}>{theTrip.special}</div></div>
                        <div>Upgrade: <div style={{float: 'right'}}>{theTrip.upgrades}</div></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="text-center mt-5">
                    {
                        currentUser.role === 'admin' ? (
                            <>
                                <Link to={`/Admin-Assign-Agent/${props.computedMatch.params.id}`} className="btn btn-outline-dark btn-block">Assign Agent</Link>
                                <Link to="/Admin-Trip-Requests" className="btn btn-outline-dark btn-block">Return to Trips</Link>
                                <Link to="/Admin" className="btn btn-outline-dark btn-block">Main Menu</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/Agent-Trips" className="btn btn-block btn-outline-dark p-4">Return to Trips</Link>
                                <Link to="/Agents" className="btn btn-outline-dark btn-block p-4">Main Menu</Link>
                            </>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default AgentTripDetails;