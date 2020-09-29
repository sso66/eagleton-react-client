import React from 'react';
import './Header.sass';
import logo from './eagleton.png'

const Header = () => (
    <header role='banner' className='parent'>
        <div className='child'>
            <div id='logo'>
                <img src={logo} alt='Eagleton Web Designs' />
            </div>
			<h1>Eagleton Web Designs</h1>
        </div>
    </header>
)

export default Header;
