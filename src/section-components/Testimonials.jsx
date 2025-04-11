import React from 'react'
import '../styles/Testimonials.css'

import leftChevron from '../assets/leftChevron.svg'
import rightChevron from '../assets/rightChevron.svg'

import testimonialImageOne from '../assets/testimonialsImage.png'

function Testimonials() {

    const leftNav = () => {
        alert("left item")
    }

    const rightNav = () => {
        alert("right item")

    }

    return (
        <div className='wrapper testimonials'>
            <div className="left-col">
                <div className="subtitle">
                    <div className="line"></div>
                    <span>Services</span>
                </div>

                <h2>
                    "Professionals in their craft! All products were super great with strong attention to details, and overall vibe"
                </h2>

                <div className="profile">
                    <p className="name">Polina Kuzina</p>
                    <p className="position">Manager at Craftwork</p>
                </div>

                <div className="carousel-nav">
                    <button className='carousel-button' onClick={leftNav}>
                        <img src={leftChevron} alt="button to navigate left of the carousel" />
                    </button>
                    <button className='carousel-button' onClick={rightNav}>
                        <img src={rightChevron} alt="button to navigate right of the carousel" />
                    </button>
                </div>
            </div>

            <img src={testimonialImageOne} alt="" width='445' height='620' className='right-col' />

        </div>
    )
}

export default Testimonials
