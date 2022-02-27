import React from 'react';
import '../styles/header.css';
import patamon from '../images/patamon.png';

const Header = () => {
    return <header>
        <img src={patamon} alt="Patamon"/>
        <h1>Digi Memory</h1>
    </header>
}

export default Header;