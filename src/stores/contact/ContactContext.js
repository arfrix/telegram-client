import React, { createContext ,useReducer} from 'react'
import {ContactReducer} from './ContactReducer'



export const contactContext = createContext()



function ContactContextPorvider(props){
    const [contactData , contactDataDispatcher] = useReducer(ContactReducer , {
        contacts :{
            status : null ,
            data : null ,
            error : null

        },
    })

    return(
        <contactContext.Provider value={{contactData , contactDataDispatcher}}>
            {props.children}
        </contactContext.Provider>
    )
}


export default ContactContextPorvider  