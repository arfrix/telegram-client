import React, { useContext } from 'react'
import {contactContext} from '../stores/contact/ContactContext'


export function FetchContacts({dispatcher}) {

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
    
    dispatcher({
        type: 'GET_CONTACTS_SUCCESSFUL',
        payload: data
    })
  
}

export function FetchChats({dispatcher}) {
    const data = [
        {
            name:'ali',
            profilePic: null,
            messages:[
                {
                    from: 'arfa',
                    to: 'ali',
                    type: 'simple',
                    value: 'salam'
                },
                {
                    from: 'ali',
                    to: 'arfa',
                    type: 'simple',
                    value: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'ali',
                    type: 'simple',
                    value: 'khobi ?'
                },
                // {
                //     from: '',
                //     to: '',
                //     type: '',
                //     value: ''
                // },
            ]
        },
        {
            name:'neda',
            profilePic: null,
            messages:[
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
            ]
        }
    ]
    
    dispatcher({
        type: 'GET_CHATS_SUCCESSFUL',
        payload: data
    })
}

export function postMessage({dispatcher, chatData: data}) {
    console.log("feeeeeer")
    dispatcher({
        type: 'SEND_MESSAGE_SUCCESSFUL',
        payload: data
    })
}