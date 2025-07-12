import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentDate = new Date()
  return (
    <div className='footer'>
        <p>Copyright @ {currentDate.getFullYear()}, CryptoApp - All Rights Reserved</p>
      
    </div>
  )
}

export default Footer
