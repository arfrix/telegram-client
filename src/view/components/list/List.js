import React from 'react'
import images from '../../../res/images'
import './List.scss'

export default function List({itemsInfo, currentPage}) {
    
    function CardContent({username, lastMessage}) {
        console.log(images.image.profilePicSample.default)
        if(currentPage === 'chat') {
            return (
                <>
                    <div className="card__username">{username}</div>
                    <div className="card__lastMessage">{lastMessage}</div>
                </>
            )
        }else return (
            <div className="card__username">{username}</div>
        )
    }


    return (
        <div className="list">
            {itemsInfo.chats.data.map((data) => 
            <div className="card">
                <img className="card__proifleImg" src={images.image.profilePicSample.default}/>
                <div className="card__content">
                    <CardContent username={data.name} lastMessage={data.chats[data.chats.length - 1].value} />
                </div>
            </div>
            
            )}
        </div>
    )
}
