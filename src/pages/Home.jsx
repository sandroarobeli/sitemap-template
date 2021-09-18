import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <h2 className='home-title'>Home Page</h2>
            <Link to='/red' className='link'>
                <div className='red'>RED</div>
            </Link>
            <Link to='/orange' className='link'>
                <div className='orange'>ORANGE</div>
            </Link>
            <Link to='/yellow' className='link'>
                <div className='yellow'>YELLOW</div>
            </Link>
            <Link to='/green' className='link'>
                <div className='green'>GREEN</div>
            </Link>
            <Link to='/blue' className='link'>
                <div className='blue'>BLUE</div>
            </Link>
            <Link to='/violet' className='link'>
                <div className='violet'>VIOLET</div>
            </Link>
        </div>
    )
}

export default Home