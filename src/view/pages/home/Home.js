import React, { useContext, useEffect, useState } from 'react'
import List from '../../components/list/List'
import FloatingPageRouter from '../../components/common/FloatingPageRouter/FloatingPageRouter'
import Chat from '../chat/Chat'
import ContactInfo from '../contactInfo/ContactInfo'
import {contactContext} from '../../../stores/contact/ContactContext'
import {FetchContacts} from '../../../common/Server'


export default function Home() {
    const [currentPage, setCurrentPage] = useState('contactInfo')
    const {contactData, contactDataDispatcher} = useContext(contactContext)

    useEffect(() => {
        FetchContacts({dispatcher: contactDataDispatcher })
        }, [])


    return (
        <div>
            {/* <List itemsInfo={contactData} currentPage={} ></List> */}
            <FloatingPageRouter path="chat" currentPage={currentPage} >
                <Chat/>
            </FloatingPageRouter>
            <FloatingPageRouter path="contactInfo" currentPage={currentPage} >
                <ContactInfo/>
            </FloatingPageRouter>
        </div>
    )
}
