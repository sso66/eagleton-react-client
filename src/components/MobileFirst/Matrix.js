import React from 'react';
// import './Matrix.css';
import './Matrix.sass';
import Flexbox from '../FlexboxModule/Flexbox';
import Flexboxes from '../FlexboxModule/Flexboxes'

const Matrix = () => (
    <div className="wrapper">
        <header className="header">Header</header>
        <main className="main">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
            <Flexbox />
        </main>
        <aside className="aside aside-1">Aside 1</aside>
        <aside className="aside aside-2">Aside 2</aside>
        <footer className="footer">Footer</footer>
    </div>
)

export default Matrix;
