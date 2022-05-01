import React from 'react';
import MenuLinks from '../../Links/MenuLinks/index.js';
import './index.css';

function Nav() {

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React Navbar</h1>
            <div className="menu-icon">
            </div>
            <MenuLinks />
        </nav>
    )
}


export default Nav