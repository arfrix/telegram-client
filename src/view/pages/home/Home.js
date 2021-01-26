import React, { useContext, useEffect } from 'react'
// import List from '../../components/list'
import FloatingPageRouter from '../../components/common/FloatingPageRouter/FloatingPageRouter'
import Chat from '../chat/Chat'
import ContactInfo from '../contactInfo/ContactInfo'
import {contactContext} from '../../../stores/contact/ContactContext'
import {FetchContacts} from '../../../common/Server'


export default function Home() {

    const {contactData, contactDataDispatcher} = useContext(contactContext)

    useEffect(() => {
        FetchContacts({dispatch: contactDataDispatcher })
         console.log(contactData)
    }, [])


    return (
        <div>sdf
            {/* <List itemsInfo={} currentPage={} ></List>
            <FloatingPageRouter component={Chat} currentPage={} />
            <FloatingPageRouter component={ContactInfo} currentPage={} /> */}
        </div>
    )
}
