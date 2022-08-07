import React from 'react';
import heroImage from '../img/airbnb-head-image.jpg';

function Hero() {
    return (
        <section className='hero'>
            <img src={heroImage} alt="AirBNB showing you the best accommodation" id="hero--img" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;