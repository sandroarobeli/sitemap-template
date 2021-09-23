import React from 'react'
import { Link } from 'react-router-dom'


import birdie from '../images/birdie.png'
import './Blue.css'

const Blue = () => {
    return (
        <div className='blue-page'>
            <h2 className='blue-title'>Blue Page</h2>
            <a target="_blank" rel="noreferrer" href='#'>
                <img src={birdie} alt='Yellow Birdie' title='Yellow Birdie' height={200} />
            </a>    
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Blue