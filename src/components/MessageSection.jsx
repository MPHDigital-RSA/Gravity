import React from 'react'
import '../styles/MessageSection.css'
import messageImage from '../assets/messageImage.png'
import ProfileCardSmall from './ProfileCardSmall'
import avatar from '../assets/avatar.jpg'

function MessageSection() {
    return (
        <div className='wrapper message-section'>

            <img src={messageImage} alt="this is the image of the founder" width="474" height="564" className='message-image' />

            <div className="message-text">
                <h2>We solve digital problems with an outstanding creative flare</h2>

                <p>
                    The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study. <br /> <br />
                    For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                </p>

                <ProfileCardSmall avatar={avatar} name="Denis Shepovalov" position="Co-Founder & CEO" />
            </div>
        </div>
    )
}

export default MessageSection
