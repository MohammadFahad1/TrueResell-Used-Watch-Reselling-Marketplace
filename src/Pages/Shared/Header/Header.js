import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className='fixed top-0 left-0 z-50 w-full'>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;