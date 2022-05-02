import React from 'react';
import MenuLinks from '../../Links/MenuLinks/index.js';
import './index.css';

function Nav() {

    return (
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
            <h1 className="navbar-logo">Jared Inya-Agha, Renaissance Man</h1>
            <div className="menu-icon">
            </div>
            <MenuLinks />
        </nav>
    )
}


export default Nav