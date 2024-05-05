import React from 'react'
import mapIcon from './contactImages/mapIcon.png';
import callIcon from './contactImages/callIcon.png';
import mailIcon from './contactImages/mailIcon.png';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-container'>
      <div className='contact-container-left'>
        <h2>Contact Us</h2>
        <div className='contact-info'>
          <img src={mapIcon} alt="Map" className='contact-icon' />
          <span>123 Street Name, City, Country</span>
        </div>
        <div className='contact-info'>
          <img src={callIcon} alt="Call" className='contact-icon' />
          <span>+1 234 567 890</span>
        </div>
        <div className='contact-info'>
          <img src={mailIcon} alt="Mail" className='contact-icon' />
          <span>example@example.com</span>
        </div>
      </div>
      <div className='contact-container-right'>
        <h2>Temple Timings</h2>
        <p>9:00am to 8:00pm</p>
      </div>
    </div>
  )
}

export default ContactUs