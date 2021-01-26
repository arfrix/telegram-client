import React from 'react'

export default function FloatingPageRouter({children, currentPage, path}) {
    if(currentPage !== path) return null
    return (
        <div>
            {children}
        </div>
    )
}
