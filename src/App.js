
import './App.css';
import Form from './Form';
import Input from './Input';
import Profile from './Profile';
import Toggle from './Toggle';
import User from './User';
import Student from './Student';
import Card from './Card';
import Nest from './Nest';
import Child from './Child';
import Handle from './Handle';
import Controll from './Controll';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Userp from './components/Userp';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Channel from './components/Channel';
import Company from './components/Company';

function App() {
  const getData=()=>{
    alert("welcome to home page")
  }
  const boy=["ramesh","suresh","ram","sam"]
  function getName(name)
  {
    alert(name)
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <Input/><br/>
      <Toggle/><br/><br/>
      <Form/><br/>
      <Profile/>
      <User data={getData}/>
     { boy.map((val)=> <Student name={val}/>)
    
     }
     <Card/>
     <Nest/>
     <Child getData={getName}/>
     <Handle/>
     <Controll/>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/filter' element={<Filter/>}/>
     
        
      
      <Route path='/*'element={<Page/>}/>
      {/* <Route path='/*'element={<Navigate to="/"/>}/>  //it is redirect to home page */}
      <Route path='/user/:name'element={<Userp/>}/>
      <Route path='/contact'element={<Contact/>}/>
        
        {/* <Route path='/channel'element={<Channel/>}/>
           <Route path='/company'element={<Company/>}/> */}
        
     


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
