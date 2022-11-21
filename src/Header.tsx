import React from 'react';
import logo from './logo.svg';

const Header = () => {
    return (

        <div className="Header">
            <header className="App-header">
                <h1 className='header-title'>Pantry App</h1>
                <img src={logo} className="Header-logo" alt="logo" />
                <h2 className='header-des'> Wondering what to eat today? We have some ideas</h2>
            </header>
        </div>
    )
}

export default Header;
