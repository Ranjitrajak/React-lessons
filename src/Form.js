import React,{useState} from 'react'

const Form = () => {
   const[name,setname]= useState("")
   const[term,setterm]= useState(false)
   const[region,setregion]= useState("")
    const getFormData=(e)=>{
        console.log(name,region,term)
        e.preventDefault()

    }

  return (
    <div>
        <form onSubmit={getFormData}>
            <input type="text" placeholder='enter your name' onChange={(e)=>{setname(e.target.value)}}/><br/><br/>
            <select onChange={(e)=>{setregion(e.target.value)}}>
                <option>select</option>
                <option>Indian</option>
                <option>Foreigner</option>
                <option>others</option>
            </select><br/><br/>
            <input type="checkbox"onChange={(e)=>{setterm(e.target.checked)}} /><span>Accept all conditions</span><br/><br/>
            <button type="submit" >Submit</button>

        </form>
    </div>
  )
}

export default Form