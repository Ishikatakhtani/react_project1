import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Mentorship from './pages/Mentorship'
import Cto from './pages/Cto'
import Contact from './pages/Contact'
import Layout from './Layout'
import Header from './Component/Header'
import Footer from './Component/Footer'
const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Home" element={<Home />}></Route>
    <Route path="/Courses" element={<Courses />}></Route>
    <Route path="/Mentorship" element={<Mentorship/>}></Route>
    <Route path="/Cto" element={<Cto/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
