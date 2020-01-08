import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Header = () => {
    return (
        <>
            {
                (localStorage.getItem('token') !== null && 
                <Container id="" fluid={true} style={{backgroundColor: 'black', color: 'white'}} className="pt-2 pb-2">
                    <Row>
                        <Col xs="12" className="text-center">
                            <h2>KidsFly</h2>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}

export default Header;