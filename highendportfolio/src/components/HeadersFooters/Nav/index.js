import React from 'react';
import MenuLinks from '../../Links/MenuLinks/index.js';
import { Row, Col, Container } from 'react-bootstrap';

function Nav() {

    return (
        <nav className="brand-color">
            <Container>
                <Row className='justify-content-md-between'>
                    <Col className='logo-container'>
                        <h1 className="navbar-logo">JARED I.A</h1>
                    </Col>
                    <Col className='links-container'>
                        <MenuLinks />
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}


export default Nav