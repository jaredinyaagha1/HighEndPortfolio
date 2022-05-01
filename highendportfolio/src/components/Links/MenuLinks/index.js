import React, { useState } from 'react';
// import Nav from "../../HeadersFooters/Nav/index.js";

function MenuLinks() {

    const [menuLinks] = useState([
        {
            title: 'About',
            url: '#',
            cName: 'nav-links'
        }, {
            title: 'Portfolio',
            url: '#',
            cName: 'nav-links'
        }, {
            title: 'Services',
            url: '#',
            cName: 'nav-links'
        }, {
            title: 'Contact Me',
            url: '#',
            cName: 'nav-links'
        }, {
            title: 'Resume',
            url: '#',
            cName: 'nav-links'
        }

    ]);

    return (
        <div>
            <div className="returned-nav-link">

                <ul>
                    {menuLinks.map((item, index) => (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};
export default MenuLinks;