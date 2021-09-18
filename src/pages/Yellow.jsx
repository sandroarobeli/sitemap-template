import React from 'react'
import { Link } from 'react-router-dom'

import './Yellow.css'

const Yellow = () => {
    return (
        <div className='yellow-page'>
            <h2 className='yellow-title'>Yellow Page</h2>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Yellow