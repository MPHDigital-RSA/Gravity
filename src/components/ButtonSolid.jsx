import React from 'react'
import '../styles/ButtonSolid.css'

function ButtonSolid({ text, link }) {
    return (
        <a href={link} className='solid-btn'>
            {text}
        </a>
    )
}

export default ButtonSolid
