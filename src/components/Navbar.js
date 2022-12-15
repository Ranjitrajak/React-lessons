import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     
    <NavLink to="/about">About</NavLink><br/>
    <NavLink to="/">Home</NavLink><br/>
    <NavLink to="/filter">Filter</NavLink><br/>
    <NavLink to="/contact">ContactUs</NavLink><br/>
    <NavLink to="/user/peter">Peter</NavLink><br/>
    <NavLink to="/user/ryan">Ryan</NavLink>
 
    </div>
  )
}

export default Navbar