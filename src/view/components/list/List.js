import React from 'react'
import images from '../../../res/images'
import './List.scss'

export default function List({itemsInfo, currentPage, onClick}) {
  console.log(itemsInfo)

    const isChat = currentPage === 'chat'
    
    function CardContent({username, lastMessage}) {
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
            {isChat ? itemsInfo.chats.data.map((data) => 
            <div className="card" onClick={() => onClick(data)}>
                <img className="card__proifleImg" src={images.image.profilePicSample.default}/>
                <div className="card__content">
                    <CardContent username={data.name} lastMessage={data.messages[data.messages.length - 1].message} />
                </div>
            </div>
            
            ) :
            itemsInfo.contacts.data.map((data) => 
            <div className="card" onClick={() => onClick(data)}>
                <img className="card__proifleImg" src={images.image.profilePicSample.default}/>
                <div className="card__content">
                    <CardContent username={data.name}/>
                </div>
            </div>
            )}
        </div>
    )
}
