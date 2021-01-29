import React, { useContext, useRef } from 'react'
import {postMessage} from '../../../common/Server'
import {chatContext} from '../../../stores/chat/ChatContext'
import './Chat.scss'

export default function Chat({data: chatData}) {

    const chat = useRef(null);
    const {chatDataDispatcher} = useContext(chatContext)

    function sendMessage() {
        chatData.messages.push({message:'baleeeeeee', from:'from', to: chatData.name, type:'simple'})
        postMessage({dispatcher: chatDataDispatcher , chatData})
    }


    function setScrollPosition() {

        const { current } = chat;
        current.scrollTop = current.scrollHeight - current.clientHeight;
        // current.scrollIntoView({behavior: "smooth", block: "end"});
    };

    return ( 
        <div ref={chat} className="chat">
            {chatData.messages.map((message) => 
                <div className="chat__message" onAnimationEnd={setScrollPosition}>
                    {message.message}
                </div>
            )
        }
        <div style={{backgroundColor: 'red'}} onClick={() => sendMessage() }>send</div>
        </div>
    )
}
