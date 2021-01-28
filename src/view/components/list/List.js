import React from 'react'

export default function List({itemsInfo, currentPage}) {
    
    function CardContent({username, lastMessage}) {
        console.log(lastMessage)
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
        <div>
            {itemsInfo.chats.data.map((data) => 
            <div className="card">
                <img className="card__proifleImg" src=""/>
                <div className="card__content">
                    <CardContent username={data.name} lastMessage={data.chats[data.chats.length - 1].value} />
                </div>
            </div>
            
            )}
        </div>
    )
}
