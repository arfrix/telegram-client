import React, { createContext ,useReducer} from 'react'
import {ChatReducer} from './ChatReducer'



export const chatContext = createContext()



function ChatContextPorvider(props){
    const [chatData , chatDataDispatcher] = useReducer(ChatReducer , {
        chats :{
            status : null ,
            data : null ,
            error : null

        },
    })

    return(
        <chatContext.Provider value={{chatData , chatDataDispatcher}}>
            {props.children}
        </chatContext.Provider>
    )
}


export default ChatContextPorvider  