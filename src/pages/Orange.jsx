import React from 'react'
import { Link } from 'react-router-dom'

import './Orange.css'

const Orange = () => {
    return (
        <div className='orange-page'>
            <h2 className='orange-title'>Orange Page</h2>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Orange