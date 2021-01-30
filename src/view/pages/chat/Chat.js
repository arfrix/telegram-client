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
        chatData.messages.push({message: messageInput.value, from:'arfa', to: chatData.name, type:'simple'})
        postMessage({dispatcher: chatDataDispatcher , chatData})

        setTimeout(() => {
            chatData.messages.push({message: messageInput.value, from:chatData.name, to: 'arfa', type:'simple'})
            postMessage({dispatcher: chatDataDispatcher , chatData})
        },2000)
    }


    function setScrollPosition() {

        const { current } = chat;
        current.scrollTop = current.scrollHeight - current.clientHeight;
        // current.scrollIntoView({behavior: "smooth", block: "end"});
    };

    function getMessageClasses({ whoAreYouTalkingTo, messageFrom}) {
        if(whoAreYouTalkingTo === messageFrom) {
            return 'chat__message chat__message--received'
        }
        return 'chat__message chat__message--sent'
    }

    return ( 
        <div className="chat">
            <div className="chat__header">
                <img className="chat__header__img" src={chatData.profilePic}/>
                <div className="chat__header__content">{chatData.name}</div>
            </div> 
            <div ref={chat} className="chat__messageList">
                {chatData.messages.map((message) => 
                    <div className={getMessageClasses({whoAreYouTalkingTo: chatData.name, messageFrom: message.from })} onAnimationEnd={setScrollPosition}>
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
