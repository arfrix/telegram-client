import React, { useContext, useEffect, useState } from 'react'
import List from '../../components/list/List'
import FloatingPageRouter from '../../components/common/FloatingPageRouter/FloatingPageRouter'
import Chat from '../chat/Chat'
import ContactInfo from '../contactInfo/ContactInfo'
import {contactContext} from '../../../stores/contact/ContactContext'
import {chatContext} from '../../../stores/chat/ChatContext'
import {FetchContacts} from '../../../common/Server'
import {FetchChats} from '../../../common/Server'


export default function Home() {
    const [currentPage, setCurrentPage] = useState('chat')
    const {contactData, contactDataDispatcher} = useContext(contactContext)
    const {chatData, chatDataDispatcher} = useContext(chatContext)

    useEffect(() => {
        FetchContacts({dispatcher: contactDataDispatcher })
        FetchChats({dispatcher: chatDataDispatcher })
    }, [])

    function listItemsData(currentPage) {
        if(currentPage === 'chat') {
            return chatData
        }
        return contactData;
    }

    console.log(chatData.chats.data)

    return (
      
        <div>
            {chatData.chats.data &&  <List itemsInfo={listItemsData(currentPage)} currentPage={currentPage}></List>}
            <FloatingPageRouter path="chat" currentPage={currentPage} >
                <Chat/>
            </FloatingPageRouter>
            <FloatingPageRouter path="contactInfo" currentPage={currentPage} >
                <ContactInfo/>
            </FloatingPageRouter>
        </div>
    )
    }
