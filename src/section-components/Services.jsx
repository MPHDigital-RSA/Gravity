import React from 'react'
import '../styles/Services.css'
import leftChevron from '../assets/leftChevron.svg'
import rightChevron from '../assets/rightChevron.svg'

function Services() {
    return (
        <div className='wrapper services'>
            <div className="subtitle">
                <div className="line"></div>
                <p>Services</p>
            </div>

            <h2 className="title">
                We love work hard and explore new things.
            </h2>

            <div className="carousel-nav">
                <button className='carousel-button'>
                    <img src={leftChevron} alt="button to navigate left of the carousel" />
                </button>
                <button className='carousel-button'>
                    <img src={rightChevron} alt="button to navigate right of the carousel" />
                </button>
            </div>
        </div>
    )
}

export default Services
