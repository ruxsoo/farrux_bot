// import React from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import Register from './Pages/Register'
import { Route,Routes } from 'react-router-dom'
import NavbarContainer from './Components/Navbar'

// import ContactInfo from './ContactInfo';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>

      {/* <ContactInfo />  */}





    </>
  )
}

export default App
