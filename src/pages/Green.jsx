import React from 'react'
import { Link } from 'react-router-dom'

import './Green.css'

const Green = () => {
    return (
        <div className='green-page'>
            <h2 className='green-title'>Green Page</h2>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Green