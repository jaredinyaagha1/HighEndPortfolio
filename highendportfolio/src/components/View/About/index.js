import React from 'react';
import blackGuy1 from '../../../assets/images/BlackGuy1.jpg';
import Resume from '../Resume/index.js';


function About() {
    return (
        <div>
            <h1>About</h1>
            <section className='row'>
                <div className='col-md-6'>
                    <img className='profilePic' src={blackGuy1} alt='profile' />
                </div>
                <div className='col-md-6'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <Resume />
                </div>

            </section>
        </div>
    );
}

export default About;