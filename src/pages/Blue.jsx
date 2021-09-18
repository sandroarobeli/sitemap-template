import React from 'react'
import { Link } from 'react-router-dom'

import './Blue.css'

const Blue = () => {
    return (
        <div className='blue-page'>
            <h2 className='blue-title'>Blue Page</h2>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Blue