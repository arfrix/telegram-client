import React, { createContext ,useReducer} from 'react'
import {contactReducer} from './ContactReducer'



export const contactContext = createContext()



function ContactContextPorvider(props){
    const [contactData , contactDataDispatch] = useReducer(contactReducer , {
        contacts :{
            status : null ,
            data : null ,
            error : null

        },
    })

    return(
        <contactContext.Provider value={{contactData , contactDataDispatch}}>
            {props.children}
        </contactContext.Provider>
    )
}


export default ContactContextPorvider  