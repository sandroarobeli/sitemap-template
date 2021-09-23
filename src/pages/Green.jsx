import React from 'react'
import { Link } from 'react-router-dom'

import chipmonk from '../images/chipmonk.jpg'
import './Green.css'

const Green = () => {
    return (
        <div className='green-page'>
            <h2 className='green-title'>Green Page</h2>
            <a target="_blank" rel="noreferrer" href='#'>
                <img src={chipmonk} alt="Kenga's neighbor chipmonk" title="Kenga's neighbor chipmonk" height={200} />
            </a>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Green