import profilePic from '../../../assets/images/blackGuy.jpg';
import SocialLinks from '../../Links/SocialLinks/index.js';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {

    return (
        <div className="py-2">
            <Card>
                <Card.Body>
                    <Container fluid="md" className="py-5 text-center">
                        <Row>
                            <Col>
                                <p id='firstName'> JARED INYA-AGHA </p>
                                <h3 id='title1'> FULL STACK WEB DEVELOPER </h3>
                                <p id='title2'> Electrical, Computer, and Electronics Engineer </p>
                                <p id='title3'> Novice Entrepreneur </p>
                            </Col>
                            <Col>
                                <img className='profilePic' src={profilePic} alt='profile' />  {/* <-- add alt tag */}
                                <div> JARED INYA-AGHA </div>
                            </Col>
                            <Col>
                                <ul className='homePageLinks'>
                                    <SocialLinks horizontal={false} />
                                </ul>
                            </Col>
                        </Row>

                    </Container>
                </Card.Body>
            </Card>
        </div>

        // <div className='home-page'>
        //     <div className='container'>
        //         <div className='row text-zone'>
        // <div className='col-md-4'>
        //     <h1 className='firstName'> JARED INYA-AGHA </h1>
        //     <h2 className='titleOne'> FULL STACK WEB DEVELOPER </h2>
        //     <h2 className='titleTwo'> Electrical Engineer </h2>
        //     <h2 className='titleThree'> Entrepreneur </h2>
        // </div>

        // <div className='col-md-4'>
        //     <img className='profilePic' src={profilePic} alt='profile' />  {/* <-- add alt tag */}
        //     <div> JARED INYA-AGHA </div>
        // </div>
        // <div className='col-md-4'>
        //     <SocialLinks />
        // </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Home;
