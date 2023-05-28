import { Routes, Route, Link, Outlet } from "react-router-dom";
import './App.css'
import NavBar from './Components/Navbar';
import Homepage from './Components/Homepage'
import './Components/Components.css'
import Propertypage from "./Components/propertypage";
import Properties from "./Components/properties";
import ErrorPage from "./Components/errorpage";
import Contactus from "./Components/contactus";
import Agents from "./Components/agents";
import data from './data.json'
import { useState } from "react";
import Aboutus from "./Components/aboutus";




export default function App() {
  let x = data.results
  const [info, setdata] = useState(x)
  
  return (
    
    <div className='body'>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route  path='/home' element={<Homepage />} errorElement={<ErrorPage/>}  />
          <Route  path='/' element={<Homepage />} errorElement={<ErrorPage/>}  />
          <Route path='/properties' element={<Properties info={info} setdata={setdata} x={data.results} />} errorElement={<ErrorPage/>} />
          <Route path={`/properties/:id`} element={<Propertypage />} errorElement={<ErrorPage/>}  />
          <Route path={`/contact`} element={<Contactus/>} errorElement={<ErrorPage/>}  />
          <Route path={`/aboutus`} element={<Aboutus/>} errorElement={<ErrorPage/>}  />
          <Route path={`/agents`} element={<Agents/>} errorElement={<ErrorPage/>}  />
         
        </Route>
      </Routes>
    </div>
  )
}

