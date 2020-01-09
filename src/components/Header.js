import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Icon, InlineIcon } from "@iconify/react";


const Header = (props) => {
    return (
        <Container id="" fluid={true} style={{backgroundColor: 'black', color: 'white'}} className="pt-2 pb-2">
            <Row>
                <Col xs="12">
                    <Container>
                        <Row>
                            <Col xs="4"></Col>
                            <Col xs="8" className="text-center">
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
                            <Col xs="4">
                                {/* Icon for Account/Logout */}
                                <a href="#" onClick={() => props.logout()}>X</a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;