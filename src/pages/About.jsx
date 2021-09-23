import React from 'react'
import { Link } from 'react-router-dom'

import './About.css'

const About = () => {
    return (
        <div className='about-page'>
            <h2 className='about-title'>About Us Page</h2>
            <p>
                About us, About us About usAbout us About usAbout usAbout us About us
                About us, About us About usAbout us About usAbout usAbout
                us About us.
                About us, About us About usAbout us About usAbout
                usAbout us About us.
                About us, About us About usAbout us About usAbout usAbout us About us
                About us, About us About usAbout us About usAbout usAbout us About us
                About us, About us About usAbout us About.
                usAbout usAbout us About us
            </p>
            
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default About