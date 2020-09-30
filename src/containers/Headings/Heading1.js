// File: Heading1.js
// Date: 9/30/2020
// Note: Heading: Hierarchy and Identity

import React from 'react';
import './Heading1.sass';
import logo from './eagleton.png'

const Header = () => (
    <div className='heading'>
        <div id='logo'>
            <img src={logo} alt='Eagleton Web Designs' />
        </div>
        <h1>Eagleton Web Designs</h1>
    </div>
) 

export default Header;

// eof

