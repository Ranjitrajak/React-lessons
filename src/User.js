import React from 'react'
// use of props

const User = (props) => {
  return (
    <div>
        Propuse ==
        <button onClick={props.data}>welcome</button>
        </div>
  )
}

export default User