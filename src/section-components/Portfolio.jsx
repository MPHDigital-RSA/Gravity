import React, { useState } from 'react'
import '../styles/Portfolio.css'
import ButtonSolid from '../components/ButtonSolid'

import portfolioItems from '../data/portfolioItems'

function Portfolio() {

    const [items, setItems] = useState(portfolioItems);

    // create a new array with filtered items according to a category value
    const filterLinks = [... new Set(portfolioItems.map((value) => value.category))];

    const filterItems = (cat) => {
        const newData = portfolioItems.filter((value) => value.category === cat);
        setItems(newData);
    }

    return (
        <div className='wrapper portfolio'>

            <div className="subtitle">
                <div className="line"></div>
                <span>Portfolio</span>
            </div>

            <div className="heading-and-filter">
                <h2>Discover our Work</h2>

                <div className="filter">
                    <button onClick={() => setItems(portfolioItems)}> All</button>
                    {filterLinks.map((link, index) => (
                        <button key={index} onClick={() => filterItems(link)}>
                            {link}
                        </button>
                    ))}
                </div>
            </div>

            <div className="portfolio-grid">
                {items.map((item, index) => (
                    <div className='portfolio-item' key={index} style={{ backgroundImage: `url(${item.image})` }}>
                        <span style={{
                            backgroundImage: `url(${item.image})`,
                            color: `${item.titleColor}`,
                            background: `${item.titleBg}`

                        }}>
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="button">
                <ButtonSolid text='+ projects' link='#' />
            </div>

        </div>
    )
}

export default Portfolio
