import React from 'react'
import '../styles/Portfolio.css'

const filterLinks = [
    'all',
    'branding',
    'web development',
    'marketing'
]

function Portfolio() {
    return (
        <div className='wrapper portfolio'>
            <div className="subtitle">
                <div className="line"></div>
                <span>Portfolio</span>
            </div>

            <div className="heading-and-filter">
                <h2>Discover our Work</h2>

                <div className="filter">
                    {filterLinks.map((link, index) => (
                        <button key={index}>
                            {link}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Portfolio
