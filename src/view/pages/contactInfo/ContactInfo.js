import React from 'react'

export default function ContactInfo({data}) {
    console.log(data)
    return (
        <div className="contact">
            {/* <img className="contact__profileImg" src={data.profilePic} /> */}
            <div className="contact__name">{data.name}</div>
            <div className="contact__phoneNumber">{data.phoneNumber}</div>
        </div>
    )
}
