import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Icon, InlineIcon } from "@iconify/react";
import bxsUser from '@iconify/icons-bx/bxs-user';
import bxLogOut from '@iconify/icons-bx/bx-log-out';
import bxHelpCircle from '@iconify/icons-bx/bx-help-circle';

const Header = (props) => {
    return (
      <div className="fixed-bottom">
        <div className="GetHelp text-right mr-1">
          <span className="GetHelp"><Icon icon={bxHelpCircle} /> Get Help</span>
        </div>
        <Container id="" fluid={true} style={{backgroundColor: 'black', color: 'white'}} className="pt-2 pb-2 headerGradient">
            <Row>
                <Container className="subHeader">
                    <Row>
                        <Col xs="2">
                        </Col>
                        <Col xs="8" className="text-center">
                            {
                                (localStorage.getItem('token') !== null && 
                                    <h2>&nbsp;</h2>
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
            </Row>
        </Container>
    </div>
    )
}

export default Header;