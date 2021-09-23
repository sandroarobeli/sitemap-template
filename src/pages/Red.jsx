import React from 'react'
import { Link } from 'react-router-dom'

import meg from '../images/meg.jpg'
import './Red.css'

const Red = () => {
    return (
        <div className='red-page'>
            <h2 className='red-title'>Red Page</h2>
            <a target="_blank" rel="noreferrer" href='#'>
                <img src={meg} alt="Megan Griffin" title="Megan Griffin" height={200} />
            </a>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Red