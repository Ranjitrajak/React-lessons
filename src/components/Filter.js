import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const[search,setSearch]=useSearchParams()
    const age=search.get("age")
    const city=search.get("city")
    const country=search.get("country")
  return (
    <div>
        <h1>Filter page</h1>
        <h3>this age is :{age}</h3>
        <h3>this city is :{city}</h3>
        <h3>this country is:{country}</h3>
        <button onClick={()=>{ setSearch({country:"India"})} }>find country</button>

    </div>
  )
}

export default Filter