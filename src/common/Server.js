import React, { useContext } from 'react'
import {contactContext} from '../stores/contact/ContactContext'


export function FetchContacts(props) {

    const data = [
        {
            name:'asghat',
            phoneNumber: 9809120003335 ,
            profilePic: null
        },
        {
            name:'aatefe',
            phoneNumber: 9809120553335 ,
            profilePic: null
        },
        {
            name:'monir',
            phoneNumber: 9809124403335 ,
            profilePic: null
        },
        {
            name:'sohrab',
            phoneNumber: 9809120903335 ,
            profilePic: null
        },
    ]
    
    props.dispatcher({
        type: 'GET_CONTACTS_SUCCESSFUL',
        payload: data
    })
  
}