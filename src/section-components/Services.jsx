import React, { useState } from 'react'
import '../styles/Services.css'
import leftChevron from '../assets/leftChevron.svg'
import rightChevron from '../assets/rightChevron.svg'

import imageOne from '../assets/heroImage.png'
import imageTwo from '../assets/messageImage.png'
import imageThree from '../assets/servicesImage.png'
import imageFour from '../assets/servicesImage2.png'


const carousel = [
    {
        color: "green",
        service: 'Web Development'
    },
    {
        color: "red",
        service: 'Graphic Design'
    },
    {
        color: "orange",
        service: 'Marketing'
    },
];

function Services() {

    const [itemIndex, setItemIndex] = useState(0);

    const leftNav = () => {
        alert("left item")
    }

    const rightNav = () => {
        alert("right item")

    }

    return (
        <div className='wrapper services'>
            <div className="subtitle">
                <div className="line"></div>
                <span>Services</span>
            </div>

            <h2 className="title">
                We love work hard and explore new things.
            </h2>

            <div className="carousel-nav">
                <button className='carousel-button' onClick={leftNav}>
                    <img src={leftChevron} alt="button to navigate left of the carousel" />
                </button>
                <button className='carousel-button' onClick={rightNav}>
                    <img src={rightChevron} alt="button to navigate right of the carousel" />
                </button>
            </div>

            <div className="carousel-content">

                <div className="image">
                    <img src={imageThree} alt="" width="500" height="300" />
                    <span>UI/UX</span>
                </div>

                <div className="image">
                    <img src={imageFour} alt="" width="500" height="300" />
                    <span>Web Dev</span>
                </div>
            </div>


        </div>
    )
}

export default Services
