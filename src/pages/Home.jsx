import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MessageSection from '../components/MessageSection'
import Services from '../section-components/Services'
import Portfolio from '../section-components/Portfolio'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <MessageSection />
            <Services />
            <Portfolio />
        </div>
    )
}

export default Home
