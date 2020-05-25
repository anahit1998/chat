import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Chat from 'components/Chat/Chat';

const Home = () => {
        return (
                <Container fluid={true}>
                    <Row >
                        <Col lg={3}>
                          {/* TO DO chats */}
                          all messages
                        </Col>
                        <Col lg={6} sm={12} xs={12} >
                          <Chat />
                        </Col>
                        <Col lg={3} sm={12} >
                          {/* TO DO Online users */}
                          online users
                        </Col>
                    </Row>
                </Container>
        );
}
export default Home;