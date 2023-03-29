import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div >
            <nav className='header-nav' >
                <a href="/Home">Home</a>
                <a href="/Blog">Blog</a>
                <a href="/tutorial">Tutorial</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;