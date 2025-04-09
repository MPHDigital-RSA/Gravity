import React from 'react'
import '../styles/NavSearchBar.css'

function NavSearchBar() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search' />
        </form>
    )
}

export default NavSearchBar
