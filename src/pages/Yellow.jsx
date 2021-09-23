import React from 'react'
import { Link } from 'react-router-dom'

import pikachu from '../images/pikachu.png'
import './Yellow.css'

const Yellow = () => {
    return (
        <div className='yellow-page'>
            <h2 className='yellow-title'>Yellow Page</h2>
            <a target="_blank" rel="noreferrer" href='#'>
                <img src={pikachu} alt="Pokemon Pikachu" title="Pokemon Pikachu" height={200} />
            </a>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Yellow