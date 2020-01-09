import React, { useState, useEffect, useContext } from 'react';

import { KidsFlyContext } from '../context/KidsFlyContext';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Icon, InlineIcon } from '@iconify/react';
import bxTrash from '@iconify/icons-bx/bx-trash';
import bxTimeFive from '@iconify/icons-bx/bx-time-five';
import bxPencil from '@iconify/icons-bx/bx-pencil';
import bxMap from '@iconify/icons-bx/bx-map';

const FamilyTripDetails = (props) => {
    const {currentUser, setCurrentUser} = useContext(KidsFlyContext);
    const [tripDetail, setTripDetail] = useState({});
    const [alertBtn, setAlertBtn] = useState(0);

    useEffect(() => {
        const tripId = props.computedMatch.params.id;

        axiosWithAuth().get(`/trip/${tripId}`)
            .then(res => setTripDetail(res.data))
            .catch(err => console.log(err))
    },[]);

    const deleteTrip = (trip) => {
        axiosWithAuth().delete(`/trip/${props.computedMatch.params.id}`)
            .then(res => {
                    props.history.push('/MyTrips');
                }
            )
            .catch(err => console.log(err))
    } 

    const updateAlertBtn = () => {
        if(alertBtn === 2){
            setAlertBtn(0)
        }else{
            setAlertBtn(alertBtn + 1)
        }
    }

    return (
        <Container>
            <Row>
                <Col xs="12" sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} className="mt-5 mb-5 text-center">
                    <h2>Trip Details</h2>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} className="mt-5 mb-2">
                    <div className="p-2" style={{border: '1px solid #1d1c1c'}}>
                        <div>Date of Trip: <div style={{float: 'right'}}>{tripDetail.date}</div></div>
                        <div>Depature Time: <div style={{float: 'right'}}>{tripDetail.departure}</div></div>
                        <div>Children:<div style={{float: 'right'}}>{tripDetail.children}</div></div>
                        <div>Airport: <div style={{float: 'right'}}>{tripDetail.airport}</div></div>
                        <div>{/* Airline: {theTrip.air} */}</div>
                        <div>Flight #: <div style={{float: 'right'}}>{tripDetail.flight}</div></div>
                        <div>Carry On: <div style={{float: 'right'}}>{tripDetail.carryOn}</div></div>
                        <div>Agent Request: <div style={{float: 'right'}}>{tripDetail.agentReq}</div></div>
                        <div>Special Needs: <div style={{float: 'right'}}>{tripDetail.special}</div></div>
                        <div>Upgrade: <div style={{float: 'right'}}>{tripDetail.upgrades}</div></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} className="mt-5 mb-5">
                    <Button color="dark" block className="p-4" onClick={() => updateAlertBtn()}>
                        {
                            (alertBtn === 0 && <><Icon icon={bxMap} /> Send Arrival Alert</>)
                        }

                        {
                            (alertBtn === 1 && <><Icon icon={bxTimeFive} /> Send 5 Minute Alert</>)
                        }
                        {
                            (alertBtn === 2 && <><Icon icon={bxTimeFive} /> Alert Sent</>)
                        }
                             
                    </Button>
                    <Link to={`/Update-Trip/${props.computedMatch.params.id}`} className="btn btn-block btn-outline-dark p-4"> <Icon icon={bxPencil} /> Update Trip </Link>
                    <Button color="danger" outline block className="p-3" onClick={() => deleteTrip()}> <Icon icon={bxTrash} /> Delete Trip </Button>
                    <Link to="/MyTrips" className="btn btn-block btn-outline-dark p-4"> Return to Trips </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default FamilyTripDetails;