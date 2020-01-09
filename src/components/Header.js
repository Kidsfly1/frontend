import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Header = () => {
    return (
        <Container id="" fluid={true} style={{backgroundColor: 'black', color: 'white'}} className="pt-2 pb-2">
            <Row>
                <Col xs="12" className="text-center">
                    {
                        (localStorage.getItem('token') !== null && 
                            <h2>KidsFly</h2>
                        )
                    }
                    {
                        (localStorage.getItem('token') === null && 
                            <h2>&nbsp;</h2>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Header;