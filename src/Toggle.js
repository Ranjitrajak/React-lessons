import React ,{useState}from 'react'
import { Button } from 'react-bootstrap'

const Toggle = () => {
    const [hide, unhide] = useState(false)
  return (
    <div>
        { hide?
            <h2>How are You?</h2>:
            null
            }
        {/* <button onClick={()=>{unhide(true)}}>Show</button>
        <button onClick={()=>{unhide(false)}}>Hide</button> */}
        <Button onClick={()=>{unhide(!hide)}}>Toggle</Button>
    </div>
  )
}

export default Toggle