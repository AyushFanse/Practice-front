import React from 'react'
import { useNavigate  } from 'react-router-dom'

export const TabTitle = ((newTitel) => {
    return (document.title = `${newTitel} | Kitsxi`)
})

export const Path = (({path}) => {

    const redirect = useNavigate()

    return (
        <>
            <div className='page_path'><span onClick={() => { redirect('/') }} className='link' >Home / </span>{path}</div>
        </>
    )
})
