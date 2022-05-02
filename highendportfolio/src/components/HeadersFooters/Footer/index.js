import React from 'react';
import SocialLinks from '../../Links/SocialLinks/index.js';
import { Row, Col, Container } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Footer</h1>
                        <ul className='footerLinks text-center'>
                            <SocialLinks horizontal={true}
                            />
                        </ul>
                        <a href="#top">Back to top ^</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;