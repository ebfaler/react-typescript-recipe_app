import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="Header">
            <header className="App-header">
                <Link to={`/`} >
                    <h1 className='header-title'>Pantry App</h1>
                </Link>
                <img src={logo} className="Header-logo" alt="logo" />
                <h2 className='header-des'> Wondering what to eat today? We have some ideas</h2>
            </header>
        </div>
    )
}

export default Header;
