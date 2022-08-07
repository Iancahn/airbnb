import React from 'react';
import airlogo from '../img/airbnb-logo.jpg';

function Nav() {
    return (
        <div>
            <div className="navbar">
                <img src={airlogo} alt="the AirBNB logo" id="airlogo" />
            </div>
        </div>
    )
}

export default Nav;