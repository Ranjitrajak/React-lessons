
import React,{useState} from 'react'

const Input = () => {
    const[data,setdata]=useState(null)
    const[print,setPrint]=useState(false)

    const getdata=(val)=>{
        setdata(val.target.value)
        setPrint(false)
    }

  return (
    <div>
        {
            print?
            <h1>{data}</h1>:null
            }
        <input  type="text" onChange={getdata}/>
        <button onClick={()=>setPrint(true)}>Submit</button>
    </div>
  )
}

export default Input