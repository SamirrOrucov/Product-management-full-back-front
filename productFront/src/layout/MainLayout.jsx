import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import "./footer.scss"

function MainLayout() {
  return (
    <div className='mainlayout'>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </div>
  )
}

export default MainLayout