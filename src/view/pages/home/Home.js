import React from 'react'
import List from '../../components/list'
import FloatingPageRouter from '../../components/common/FloatingPageRouter/FloatingPageRouter'
import Chat from '../chat/Chat'
import ContactInfo from '../contactInfo/ContactInfo'

export default function Home() {
    return (
        <div>
            <List itemsInfo={} currentPage={} ></List>
            <FloatingPageRouter component={Chat} currentPage={} />
            <FloatingPageRouter component={ContactInfo} currentPage={} />
        </div>
    )
}
