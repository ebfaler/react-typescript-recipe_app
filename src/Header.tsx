import React from 'react';
import logo from './logo.svg';

const Header = () => {
    return (

        <div className="Header">
            <header className="App-header">
                <h1>PANTRY APP</h1>
                <h2> Wondering what to eat today? We have some ideas</h2>
                <img src={logo} className="Header-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Header;
