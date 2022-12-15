import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h1>Contact page</h1><br/>
        <Link to="/channel">channel</Link><br/>
        <Link to="/company">company</Link><br/>
        <Outlet/>
    </div>
  )
}

export default Contact