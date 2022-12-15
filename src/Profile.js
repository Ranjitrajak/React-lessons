import React ,{useState}from 'react'

// const Profile = () => {
//     const [loggedIn, setLoggedIn] = useState(2) // it is show how to write if else condition
//   return (
//     <div>? {loggedIn==1?
//         <h1>Welcome User 1</h1>
//         :loggedIn==2?<h1>Welcome User2</h1>
//         :<h1>Welcome User3</h1>}</div>
//   )
// }

const Profile = () => {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const loginHandle=(e)=>{
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
            console.log({
                name:user,
                pass:password
            })
        }
        e.preventDefault()
    }
    const userHandler=(e)=>{
       
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    const passwordHandler=(e)=>{
        let item=e.target.value;
        if(item.length<5 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
  
  return (
    <div><h1>Login</h1><br/>
       <form onSubmit={loginHandle}>
        <label>Name:</label>
       <input type="text" placeholder='enter your name' onChange={userHandler}/>{userErr?<span>User Not Valid</span>:""}<br/><br/>
       <label>Password:</label>
        <input type="password" placeholder='enter your password' onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}<br/><br/>
        <button type="submit">login</button>
       </form>
    </div>
  )
}

export default Profile