import React from 'react'
import { Link } from 'react-router-dom'

import './Red.css'

const Red = () => {
    return (
        <div className='red-page'>
            <h2 className='red-title'>Red Page</h2>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Red