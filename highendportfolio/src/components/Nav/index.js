import React, { Component } from 'react';

import { menuItems } from './menuItems';
import './index.css';

function Navbar() {

    return (
        <nav className="NavbarItems"> hrryyr
            {/* <h1 className="navbar-logo"><FontAwesomeIcon icon={faExplosion} size="3x" />React Navbar</h1>
            <div className="menu-icon">
                <FontAwesomeIcon icon={this.state.clicked ? faBars : faBars} />
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                <FontAwesomeIcon icon={faCoffee} /> {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul> */}
        </nav>
    )
}


export default Navbar