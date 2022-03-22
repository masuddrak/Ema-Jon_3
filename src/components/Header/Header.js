import React from 'react';
import logos from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <img src={logos} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;