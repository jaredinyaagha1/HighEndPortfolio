import React, { Component } from 'react';

import { menuLinks } from '../../Links/MenuLinks/MenuLinks';
import './index.css';

function Navbar() {

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React Navbar</h1>
            <div className="menu-icon">
            </div>
            {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul> */}
        </nav>
    )
}


export default Navbar