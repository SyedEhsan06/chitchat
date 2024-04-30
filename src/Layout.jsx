import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
const Layout = () => {
  const url = useLocation()
  return (
    <div>
      {
        url.pathname !== '/chat' && <Navbar />
      }
      <Outlet />
    </div>
  )
}

export default Layout