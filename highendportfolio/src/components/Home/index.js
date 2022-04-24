import './index.css';
import { socialLinks } from './socialLinks';
// import { brands } from '@fortawesome/free-brands-svg-icons';
import profilePic from '../../assets/images/blackGuy.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars, faExplosion } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='row text-zone'>
                <div className='col-md-6'>
                    <h1 className='firstName'> JARED INYA-AGHA </h1>
                    <h2 className='titleOne'> FULL STACK WEB DEVELOPER </h2>
                    <h2 className='titleTwo'> Electrical Engineer </h2>
                    <h2 className='titleThree'> Entrepreneur </h2>
                </div>

                <div className='col-md-6'>
                    <img className='profilePic' src={profilePic} alt='profile' />  {/* <-- add alt tag */}
                    <div> JARED INYA-AGHA </div>
                </div>
                <div className='col-md-6'>
                    <ul className='social-links'>
                        <FontAwesomeIcon icon={faCoffee} />
                        {socialLinks.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home;
