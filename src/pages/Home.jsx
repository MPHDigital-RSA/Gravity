import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MessageSection from '../components/MessageSection'
import Services from '../section-components/Services'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <MessageSection />
            <Services />
        </div>
    )
}

export default Home
