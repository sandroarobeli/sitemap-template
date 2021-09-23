import React from 'react'
import { Link } from 'react-router-dom'

import donaldDuck from '../images/donaldDuck.png'
import './Orange.css'

const Orange = () => {
    return (
        <div className='orange-page'>
            <h2 className='orange-title'>Orange Page</h2>
            <a target="_blank" rel="noreferrer" href='#'>
                <img src={donaldDuck} alt="Donald duck" title="Donald duck" height={200} />
            </a>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Orange