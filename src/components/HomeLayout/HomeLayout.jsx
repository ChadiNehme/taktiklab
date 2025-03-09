import React from 'react'
import './HomeLayout.css'
import { Outlet } from 'react-router-dom'
import HomeHeader from '../HomeHeader/HomeHeader'
const HomeLayout = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
    </div>
  )
}

export default HomeLayout
