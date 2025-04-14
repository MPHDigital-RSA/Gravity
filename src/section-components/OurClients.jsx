import React from 'react'
import '../styles/OurClients.css'

import xiaomi from '../assets/xiaomi.svg'
import nike from '../assets/nike.svg'
import amd from '../assets/amd.svg'
import tinder from '../assets/tinder.svg'
import apple from '../assets/apple.svg'

function OurClients() {
    return (
        <div className='wrapper our-clients'>
            <div className='our-clients__text'>
                <h2>Our Clients</h2>
                <div className="our-clients__description-subtitle">
                    <div className="subtitle">
                        <div className="line"></div>
                        <span>We worked with</span>
                    </div>

                    <p className='our-clients__description'>Our favorite brands are our friends! We help them to achieve their goals, they help us to stay sharp.</p>
                </div>
            </div>
            <div className='our-clients__images'>
                <img src={xiaomi} alt="xiaomi logo" width="80" height="62.86" />
                <img src={tinder} alt="xiaomi logo" width="52" height="69.03" />
                <img src={apple} alt="xiaomi logo" width="56" height="68" />
                <img src={nike} alt="xiaomi logo" width="145.45" height="50" />
                <img src={amd} alt="xiaomi logo" width="60" height="60" />
            </div>
        </div>
    )
}

export default OurClients
