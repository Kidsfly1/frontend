import React from 'react';
import { Row, Col } from 'reactstrap';

const Step4 = (props) => {
    if(props.currentStep !== 3) {
        return null;
    }

    return (
        <>
            <Row>
                <Col xs="12" sm={{size: 8, offset: 2}} className="text-center">
                    <h2 className="mt-5 mb-5">Confirmation
                        <p style={{fontSize: '1rem'}}>Booking # {Math.floor(100000 + Math.random() * 900000)}-{Math.floor(100 + Math.random() * 900)}</p>
                    </h2>
                </Col>
            </Row>
            
        </>
    )
}

export default Step4;