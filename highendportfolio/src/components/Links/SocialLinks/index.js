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

    const { horizontal } = props;
    if (horizontal) {
        for (let i = 0; i < socialLinks.length; i++) {
            socialLinks[i].cName = "px-2 py-4 d-none d-md-inline-block";
            console.log(socialLinks[i].cName);
        }
    }
    // 
    // if (horizontal) {
    //     let socialLinks.cName = "px-2 py-4 d-none d-md-inline-block"
    // }
    // else {
    //     socialLinks.cName = ""
    // }
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