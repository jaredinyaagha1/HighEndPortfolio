import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';



function SocialLinks() {

    const [socialLinks] = useState([

        {
            title: 'Email',
            url: 'https://www.linkedin.com/in/jaredengineering/',
            icon: faEnvelope,
            cName: 'home-links'
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jared-engineering/',
            icon: faLinkedin,
            cName: 'home-links'
        }, {
            title: 'Github',
            url: 'https://github.com/jaredinyaagha1',
            icon: faGithub,
            cName: 'home-links'
        }, {
            title: 'Twitter',
            url: 'https://twitter.com/jaredtweetstech',
            icon: faTwitter,
            cName: 'home-links'
        }
    ]);

    return (
        <div>
            {/* <div className="returned-social-link">

                <ul> */}
            {socialLinks.map((item, index) => (
                <li key={index} className={item.cName} >
                    <a href={item.url}>
                        <FontAwesomeIcon icon={item.icon} className='fa-3x' />
                    </a>
                </li>
            ))}
            {/* </ul> */}
            {/* </div> */}
        </div>
    );
};
export default SocialLinks;