import React from 'react'
import { NavLink } from 'react-router-dom'

const Page = () => {
  return (
    <div>
        <h1 style={{color:"red"}}>404 Page not found</h1>
        <NavLink to="/">Back to Home</NavLink>
    </div>
  )
}

export default Page