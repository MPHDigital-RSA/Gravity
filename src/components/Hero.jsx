import React from 'react'
import ButtonSolid from './ButtonSolid'
import '../styles/Hero.css'
import heroImage from '../assets/heroImage.png'
import heroVideo from '../assets/heroVideo.png'

function Hero() {
    return (
        <div className='wrapper hero'>
            <div className="text">
                <h1>Work around you and your team</h1>
                <p>From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers.</p>
                <ButtonSolid link="#" text="get started" />
            </div>

            <img src={heroImage} alt="this is the hero image placeholder graphic" width='655' height='840' className='hero-image' />

            <div className="hero-video">

            </div>
        </div>
    )
}

export default Hero
