import React from 'react'
import '../styles/ProfileCardSmall.css'

function ProfileCardSmall({ avatar, name, position }) {
    return (
        <div className='flex'>
            <img src={avatar} alt="owner image" width='65' height='65' />

            <div className="name-and-position">
                <p className="name">{name}</p>
                <p className="position">{position}</p>
            </div>
        </div>
    )
}

export default ProfileCardSmall
