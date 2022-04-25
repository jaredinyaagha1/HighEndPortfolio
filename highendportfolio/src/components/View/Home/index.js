import './index.css';
import profilePic from '../../../assets/images/blackGuy.jpg';
import SocialLinks from '../../Links/SocialLinks/index.js';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='row text-zone'>
                <div className='col-md-4'>
                    <h1 className='firstName'> JARED INYA-AGHA </h1>
                    <h2 className='titleOne'> FULL STACK WEB DEVELOPER </h2>
                    <h2 className='titleTwo'> Electrical Engineer </h2>
                    <h2 className='titleThree'> Entrepreneur </h2>
                </div>

                <div className='col-md-4'>
                    <img className='profilePic' src={profilePic} alt='profile' />  {/* <-- add alt tag */}
                    <div> JARED INYA-AGHA </div>
                </div>
                <div className='col-md-4'>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}
export default Home;
