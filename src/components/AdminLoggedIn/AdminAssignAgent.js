import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Form, Formik, Field } from 'formik';
import { Link } from 'react-router-dom';

const AdminAgentAssign = (props) => {
    const [agentList, setAgentList] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/user/agents')
            .then(res => setAgentList(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center">
                    <h3 className="mt-5 mb-5">Assign Agent</h3>
                    <div className="mt-5 mb-5">&nbsp;</div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
                    <Formik
                        initialValues={{agent: '', tripId: props.computedMatch.params.id}}
                        onSubmit={(values) => {
                            // axiosWithAuth().put(`/trips/${props.computedMatch.params.id}`)
                            //     .then(res => console.log(res))
                            //     .catch(err => console.log(err))
                        }}
                    >
                        <Form>
                            <Field as="select" name="agent" id="agent" className="form-control mb-5">
                                <option value="1">Nameless Agent</option>
                                {
                                    agentList.map(agent =>
                                        // (agent.fullname &&
                                            <option key={agent.id} value={agent.id}>{agent.fullname}</option>
                                        //)
                                    )
                                }
                            </Field>
                            <Field type="hidden" name="tripId" id="tripId" />
                            <Button type="submit" className="btn btn-block btn-dark">Assign Agent</Button>
                            <Link to={`/Admin-Trip-Details/${props.computedMatch.params.id}`} className="btn btn-outline-dark btn-block">Cancel</Link>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAgentAssign;