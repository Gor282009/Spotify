import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Layout