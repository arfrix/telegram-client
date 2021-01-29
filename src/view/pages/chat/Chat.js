import React, { useRef } from 'react'
import './Chat.scss'

export default function Chat({data}) {
    console.log(data)

    const chat = useRef(null);



    function setScrollPosition() {

        const { current } = chat;
        current.scrollTop = current.scrollHeight - current.clientHeight;
        // current.scrollIntoView({behavior: "smooth", block: "end"});
        console.log("ddddd")
    };

    return ( 
        <div ref={chat} className="chat">
            <div onClick={setScrollPosition}>444444444444444444</div>
            {data.messages.map((message) => 
                <div className="chat__message" onAnimationEnd={setScrollPosition}>
                    {message.value}
                </div>
            )
            }
        </div>
    )
}
