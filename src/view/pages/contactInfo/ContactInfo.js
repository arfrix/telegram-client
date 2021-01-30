import React from 'react'
import './ContactInfo.scss'

export default function ContactInfo({data, startChat, hasCloseBtn, onOpen}) {
    return (
        <div className="contact">
            <img className="contact__profileImg" src={data.profilePic} />
            <div className="contact__name">{data.name}</div>
            <div className="contact__phoneNumber">{data.phoneNumber}</div>
            {!hasCloseBtn && <div className="contact__chatbtn" onClick={() => startChat('chat')}>شروع گپ زدن</div>}
            {hasCloseBtn && <div className="contact__chatbtn contact__chatbtn--red" onClick={() => onOpen(false)}>بستن</div>}
        </div>
    )
}
