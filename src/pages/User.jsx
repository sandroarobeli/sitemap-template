import React from 'react'
import { useParams, Link } from 'react-router-dom'


import './User.css'

const User = () => {
    const userId = useParams().userId


    return (
        <div className='user-page'>
            <h2 className='user-title'>Welcome to {userId}'s Page!</h2>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}


export default User