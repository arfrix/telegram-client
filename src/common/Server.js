import React, {useContext} from 'react'
import {contactContext} from '../stores/contact/ContactContext'


export function getContacts() {
    const {contactDataDispatch} = useContext(contactContext)
    contactDataDispatch.dispatch({
        type: 'GET_CONTACTS_SUCCESSFUL',
        payload: 'data'
    })
}