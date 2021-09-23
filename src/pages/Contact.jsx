import React from 'react'
import { Link } from 'react-router-dom'

import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-page'>
            <h2 className='contact-title'>Contact Us Page</h2>
            <div className='contact-page__methods'>
                <a href="mailto:sandroarobeli@yahoo.com?subject=From prospective employee!&body=This is only a test!">email us</a>
                <a href="tel:8476151111">Call us at 847-615-1111</a>
                <a href="tel:8476151000" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">Call Us at 847-615-1000</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=myDomain.com" target="_blank" rel="noreferrer">
                    Share on Facebook
                </a>
            </div>
            <Link to='/' className='link'>
                <h3>Home</h3>
            </Link>
        </div>
    )
}

export default Contact