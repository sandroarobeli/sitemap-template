import React from 'react'
import { Link } from 'react-router-dom'

import './Sitemap.css'

const Sitemap = () => {
    return (
        <div className='sitemap'>
            <h2 className='sitemap-title'>Site Map</h2>
            <ul className='sitemap-list'>
                <li>
                    <Link to='/' className='item'>Home</Link>
                </li>
                <li>
                    <Link to='/red' className='item'>Red</Link>
                </li>
                <li>
                    <Link to='/orange' className='item'>Orange</Link>
                </li>
                <li>
                    <Link to='/yellow' className='item'>Yellow</Link>
                </li>
                <li>
                    <Link to='/green' className='item'>Green</Link>
                </li>
                <li>
                    <Link to='/blue' className='item'>Blue</Link>
                </li>
                <li>
                    <Link to='/violet' className='item'>Violet</Link>
                </li>
                <li>
                    <Link to='/users/:userId' className='item'>Users</Link>
                </li>

                <li>
                    <Link to='.footer' className='item'>Footer</Link>
                    <ul style={{ marginTop: '0.5rem'}}>
                        <li>
                            <Link to='/about' className='item'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='item'>Contact | Social media</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}


export default Sitemap