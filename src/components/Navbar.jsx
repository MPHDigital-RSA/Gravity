import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import menu from '../assets/menu.svg'

import "../styles/Navbar.css"

function Navbar() {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleMenu = () => {
        setIsMenuOpened(!isMenuOpened);
        // alert(isOpened)
    }

    return (
        <>
            <div className='wrapper navbar'>
                <img src={logo} alt="Gravity home" className='logo' width="74" height="23" />

                {!isMenuOpened && <img src={search} alt="Gravity home" className='search' width="20" height="20" />}

                <img src={menu} alt="Gravity home" className='menu' width="34" height="14" onClick={handleMenu} />
            </div>

            {isMenuOpened &&
                <div className="mobile-menu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Pricing</a>
                </div>
            }
        </>

    )
}

export default Navbar
