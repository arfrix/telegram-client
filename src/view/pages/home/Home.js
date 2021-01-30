import React, { useContext, useEffect, useRef, useState } from 'react'
import List from '../../components/list/List'
import FloatingPageRouter from '../../components/common/FloatingPageRouter/FloatingPageRouter'
import Chat from '../chat/Chat'
import ContactInfo from '../contactInfo/ContactInfo'
import {contactContext} from '../../../stores/contact/ContactContext'
import {chatContext} from '../../../stores/chat/ChatContext'
import {FetchContacts} from '../../../common/Server'
import {FetchChats} from '../../../common/Server'
import './Home.scss'

export default function Home() {
    const [currentPage, setCurrentPage] = useState('contactInfo')
    const {contactData, contactDataDispatcher} = useContext(contactContext)
    const {chatData, chatDataDispatcher} = useContext(chatContext)
    const [selectedListItem, setSelectedListItem] = useState(null)
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

     console.log(chatData)
     console.log(contactData)

    return (
        
        <div className="home">  
            <div className="home__navBar">
                <div className="home__navBar__item" onClick={() => { setCurrentPage("contactInfo"); setSelectedListItem(null)} }>contacts</div>
                <div className="home__navBar__item" onClick={() => { setCurrentPage("chat"); setSelectedListItem(null)} }>chat</div>
            </div>
            {chatData.chats.data && contactData.contacts.data &&  <List itemsInfo={listItemsData(currentPage)} currentPage={currentPage} onClick={setSelectedListItem}></List>}  
            <FloatingPageRouter path="chat" currentPage={currentPage} >
                {selectedListItem && <Chat currentPage={currentPage} data={selectedListItem}/>}
            </FloatingPageRouter>
            <FloatingPageRouter path="contactInfo" currentPage={currentPage} >
                {selectedListItem &&  <ContactInfo data={selectedListItem}/>}
            </FloatingPageRouter>
        </div>
    )
    }
