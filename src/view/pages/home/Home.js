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
    const [usernameWhichSelectedFromChatOrContactList, setUsernameWhichSelectedFromChatOrContactList] = useState(null)
    var lodashArray = require('lodash/array');
    
    useEffect(() => {
        FetchContacts({dispatcher: contactDataDispatcher })
        FetchChats({dispatcher: chatDataDispatcher })
        
    }, [])

    function listComponentItemsData(currentPage) {
        if(currentPage === 'chat') {
            return chatData
        }
        return contactData;
    }

    function getChatDataByUsername(username) {
        const index = lodashArray.findIndex(chatData.chats.data,{name: username})
        return chatData.chats.data[index]
    }

    function getContactDataByUsername(username) {
        const index = lodashArray.findIndex(contactData.contacts.data ,{name: username})
        return contactData.contacts.data[index]
    }


    const selectedChatData = usernameWhichSelectedFromChatOrContactList && getChatDataByUsername(usernameWhichSelectedFromChatOrContactList)
    const selectedContactData = usernameWhichSelectedFromChatOrContactList && getContactDataByUsername(usernameWhichSelectedFromChatOrContactList)

    return (
        
        <div className="home">  
            <div className="home__navBar">
                <div className="home__navBar__item" onClick={() => { setCurrentPage("chat"); setUsernameWhichSelectedFromChatOrContactList(null)} }>chat</div>
                <div className="home__navBar__item" onClick={() => { setCurrentPage("contactInfo"); setUsernameWhichSelectedFromChatOrContactList(null)} }>contacts</div>
            </div>
            {chatData.chats.data && contactData.contacts.data &&  <List itemsInfo={listComponentItemsData(currentPage)} currentPage={currentPage} onClick={setUsernameWhichSelectedFromChatOrContactList}></List>}  
            <FloatingPageRouter path="chat" currentPage={currentPage} >
                {selectedChatData && selectedContactData && <Chat data={selectedChatData} contactInfo={selectedContactData} continueChat={setCurrentPage}/>}
            </FloatingPageRouter>
            <FloatingPageRouter path="contactInfo" currentPage={currentPage} >
                {selectedContactData &&  <ContactInfo data={selectedContactData} startChat={setCurrentPage}/>}
            </FloatingPageRouter>
        </div>
    )
    }
