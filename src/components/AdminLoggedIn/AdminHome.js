import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { KidsFlyContext } from '../../context/KidsFlyContext';

const AdminHome = (props) => {
    const { currentUser } = useContext(KidsFlyContext);

    if (currentUser.role_id === 2) {
        props.history.push('/Agents');
        return null;
    }else if(currentUser.role_id === 1) {
        props.history.push('/Welcome');
        return null;
    }

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h2 className="mt-5 mb-5">Welcome, {currentUser.fullname}</h2>
                    <div className="mt-5 mb-5">&nbsp;</div>
                    <Link to="/Admin-Trip-Requests" className="btn btn-dark btn-block mt-5 btn-lg"> View New Requests </Link>
                    <Link to="/Admin-Create-Trip" className="btn btn-block btn-outline-dark btn-lg"> Create Trip </Link>
                    <Link to="/Agent-Assign-Trip" className="btn btn-block btn-outline-dark btn-lg"> Assign Trip </Link>
                    <Link to="/Agent-Cancel-Trip" className="btn btn-block btn-outline-dark btn-lg"> Cancel Trip </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminHome;