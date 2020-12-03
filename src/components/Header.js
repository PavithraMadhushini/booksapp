import React from 'react';
import NytLogo from '../assests/nyt-logo.jpeg';

const Header =() => {

    const headerStyle={
        backgroundColor: 'rgb(83, 140, 39)',
        width: '100%',
        height: '80px',
        color: 'rgb(247,247,247)'
    };

    const spanStyle={
        lineHeight: '50px',
        marginLeft: '20px'
    }
    return(
        <nav>
            <div style={headerStyle}>
            <div className="nav-wrapper">
              <div className="amg">
                <img src={NytLogo} className="nyt-logo" alt="logo" />
               </div>
               </div>
            </div>
        </nav>
    )
}

export default Header;