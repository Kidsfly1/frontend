import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Icon, InlineIcon } from "@iconify/react";
import bxsUser from '@iconify/icons-bx/bxs-user';
import bxLogOut from '@iconify/icons-bx/bx-log-out';
import bxHome from '@iconify/icons-bx/bx-home';




const Header = (props) => {
    return (
        <Container id="" fluid={true} style={{backgroundColor: 'black', color: 'white'}} className="pt-2 pb-2 headerGradient">
            <Row>
                <Container className="subHeader">
                    <Row>
                        <Col xs="2">
                            {
                                (localStorage.getItem('token') !== null && 
                                    <>
                                        {/* <Link to="/Welcome"><Icon icon={bxHome} style={{color: '', height: '24px', width: '24px'}} /></Link> */}
                                        <Link to="/UpdateInfo"><Icon icon={bxsUser} style={{color: '', height: '24px', width: '24px'}} /></Link>
                                    </>
                                )
                            }
                        </Col>
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
                        <Col xs="2" className="text-right">
                            {/* <Icon icon={bxsUser} /> */}
                            {
                                (localStorage.getItem('token') !== null && 
                                    <Link to="/Logout"><Icon icon={bxLogOut} style={{color: '', height: '24px', width: '24px'}} /></Link>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default Header;