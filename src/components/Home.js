import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
       <h1 style={{color:"green"}}> Home</h1>
       <br/>
       <button onClick={()=>{navigate("/about")}}>go to about</button>
       <button onClick={()=>{navigate("/filter")}}>go to filter</button>
    </div>
  )
}

export default Home