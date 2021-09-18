import React from 'react'
import { Link } from 'react-router-dom'

import './Violet.css'

const Violet = () => {
    return (
        <div className='violet-page'>
            <h2 className='violet-title'>Violet Page</h2>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Violet