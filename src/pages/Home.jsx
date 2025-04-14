import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MessageSection from '../components/MessageSection'
import Services from '../section-components/Services'
import Portfolio from '../section-components/Portfolio'
import Testimonials from '../section-components/Testimonials'
import OurClients from '../section-components/OurClients'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <MessageSection />
            <Services />
            <Portfolio />
            <Testimonials />
            <OurClients />
        </div>
    )
}

export default Home
