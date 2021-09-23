import React from 'react'
import { Link } from 'react-router-dom'

import minion from '../images/minion.png'
import './Violet.css'

const Violet = () => {
    return (
        <div className='violet-page'>
            <h2 className='violet-title'>Violet Page</h2>
            <a target="_blank" rel="noreferrer" href='#'>
                <img src={minion} alt="Minion" title="Minion" height={200} />
            </a>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Violet