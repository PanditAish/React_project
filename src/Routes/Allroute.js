import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../Main/Loginpage'
import Registerpage from '../Main/Registerpage'

const Allroute = () => {
  return (
    <>
       <div>
         <Routes>
           <Route path='/' element={<Loginpage />} />
           <Route path='/signup' element={<Registerpage />} />
         </Routes>
       </div>
    </>
  )
}

export default Allroute
