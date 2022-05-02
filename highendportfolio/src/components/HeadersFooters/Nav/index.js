import React from 'react';
import MenuLinks from '../../Links/MenuLinks/index.js';
// import './index.css';
import { Row, Col, Container } from 'react-bootstrap';

function Nav() {

    return (
        <div>
            <Container>
                <nav className="container d-flex flex-column flex-md-row justify-content-between">
                    <Row>
                        <Col>
                            <h1 className="navbar-logo">Jared Inya-Agha, Renaissance Man</h1>
                        </Col>
                        <Col>
                            <MenuLinks />
                        </Col>
                    </Row>
                </nav>
            </Container>
        </div>
    )
}


export default Nav