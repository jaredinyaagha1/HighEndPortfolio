import React from 'react';
import MenuLinks from '../../Links/MenuLinks/index.js';
import './index.css';
import { Row, Col, Container } from 'react-bootstrap';

function Nav() {

    return (
        <nav className="navb d-flex flex-column flex-md-row justify-content-between">
            <Container>
                <Row>
                    <Col>
                        <h1 className="navbar-logo">JIA</h1>
                    </Col>
                    <Col>
                        <MenuLinks />
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}


export default Nav