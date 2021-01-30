import React, { useContext, useRef } from 'react'
import {postMessage} from '../../../common/Server'
import {chatContext} from '../../../stores/chat/ChatContext'
import useInput from '../../components/common/useInput'
import './Chat.scss'

export default function Chat({data: chatData}) {

    const chat = useRef(null);
    const {chatDataDispatcher} = useContext(chatContext)
    const messageInput = useInput("هرچه میخواهی بگو")

    function sendMessage() {
        chatData.messages.push({message: messageInput.value, from:'from', to: chatData.name, type:'simple'})
        postMessage({dispatcher: chatDataDispatcher , chatData})
    }


    function setScrollPosition() {

        const { current } = chat;
        current.scrollTop = current.scrollHeight - current.clientHeight;
        // current.scrollIntoView({behavior: "smooth", block: "end"});
    };

    return ( 
        <div className="chat">
            <div ref={chat} className="chat__messageList">
                {chatData.messages.map((message) => 
                    <div className="chat__message" onAnimationEnd={setScrollPosition}>
                        {message.message}
                    </div>
                )}
            </div>
        <div className="chat__send" >
            <input className="chat__send__input" type="text" {...messageInput}/>
            <div className="chat__send__btn" onClick={() => sendMessage() } >send</div>
        </div>
        </div>
    )
}
