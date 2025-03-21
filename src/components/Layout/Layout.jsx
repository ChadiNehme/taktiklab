import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <div className='site-wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
