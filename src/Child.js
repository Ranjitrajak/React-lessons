import React from 'react'

const Child = (props) => {
    const name=" Ronaldo"
  return (
    <div><div>
    <h1>User Name is : </h1>
    <button onClick={()=>props.getData(name)} >Click Me</button>
</div></div>
  )
}

export default Child  //send data child to parent