import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  return (
    <div className="navbarContainer">
        <div  className='navbar'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add"}>Add Product</NavLink>

    </div>
    </div>
  )
}

export default Navbar