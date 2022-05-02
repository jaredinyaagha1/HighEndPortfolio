import React from 'react';
import SocialLinks from '../../Links/SocialLinks/index.js';

function Footer() {
    return (
        <div>
            <h1>Footer</h1>
            <ul className='footerLinks'>
                <SocialLinks />
            </ul>
            Back to top <a href="#top">^</a>
        </div>
    );
}

export default Footer;