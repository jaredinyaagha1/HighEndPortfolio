import profilePic from '../../../assets/images/blackGuy.jpg';
import SocialLinks from '../../Links/SocialLinks/index.js';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {

    return (
        <div className="home">
            <Container fluid="md" className="py-5 text-center">
                <Row>
                    <Col >
                        <p id='firstName'> JARED INYA-AGHA </p>
                        <h2 id='title1'> FULL STACK WEB DEVELOPER </h2>
                        <p id='title2'> Electrical Engineer </p>
                        <p id='title3'> Entrepreneur </p>
                    </Col>
                    <Col>
                        <img className='profilePic' src={profilePic} alt='profile' />  {/* <-- add alt tag */}
                        <div> JARED INYA-AGHA </div>
                    </Col>
                    <Col>
                        <SocialLinks />
                    </Col>
                </Row>
            </Container>
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
