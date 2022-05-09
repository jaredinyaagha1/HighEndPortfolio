import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';



function SocialLinks(props) {
    // console.log(props);



    const [socialLinks] = useState([

        {
            title: 'Email',
            url: 'https://www.linkedin.com/in/jaredengineering/',
            icon: faEnvelope,
            cName: ''
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jared-engineering/',
            icon: faLinkedin,
            cName: ''
        }, {
            title: 'Github',
            url: 'https://github.com/jaredinyaagha1',
            icon: faGithub,
            cName: ''
        }, {
            title: 'Twitter',
            url: 'https://twitter.com/jaredtweetstech',
            icon: faTwitter,
            cName: ''
        }
    ]);

    const { isHorizontal, isMobile } = props;
    console.log(props)
    if (isHorizontal && isMobile === true) {
        return (
            <div>
                {socialLinks.map((item, index) => (
                    <li key={index} className="px-2 py-4 d-flex d-md-inline-block" >
                        <a href={item.url}>
                            <FontAwesomeIcon icon={item.icon} className='fa-3x dark-accent' />
                        </a>
                    </li>
                ))}
            </div>
        );
    }

    else if (isHorizontal === true && isMobile === false) {
        return (
            <div>
                {socialLinks.map((item, index) => (
                    <li key={index} className="px-2 py-4 d-flex d-md-inline-block" >
                        <a href={item.url}>
                            <FontAwesomeIcon icon={item.icon} className='fa-3x dark-accent' />
                        </a>
                    </li>
                ))}
            </div>
        );
    }
};
export default SocialLinks;