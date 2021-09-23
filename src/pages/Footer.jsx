import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <h2>
                <Link to='/' className='link'>Home</Link>
            </h2>
            <NavLink to='/about' activeStyle={{fontWeight:700, color:'red', fontSize: '1.5rem'}}>About us</NavLink>
            <NavLink to='/contact' activeStyle={{fontWeight:700, color:'red', fontSize: '1.5rem'}}>Contact us</NavLink>
            <NavLink to='/sitemap' activeStyle={{fontWeight:700, color:'red', fontSize: '1.5rem'}}>Sitemap</NavLink>
        </footer>
    )
}

export default Footer