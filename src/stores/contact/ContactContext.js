import React, { createContext ,useReducer} from 'react'
import {contactReducer} from './ContactReducer'



export const contactContext = createContext()



function ContactContextPorvider(props){
    const [contactData , contactDataDispatcher] = useReducer(contactReducer , {
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