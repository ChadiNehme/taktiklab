import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className='left-side'>
        <img src={assets.taktiklablogo} className='logo-img' alt="logo" loading="lazy" />
        <h3 className='logo-text'>Taktik<span>Lab</span></h3>
      </div>

      <div className='right-side'>
        <Link to='user-dashboard' className='get-started-btn'>Get Started</Link>
      </div>

    </div>
  )
}

export default Header
