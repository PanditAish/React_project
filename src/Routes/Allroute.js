import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from '../Main/Loginpage'
import Registerpage from '../Main/Registerpage'
import Admindashboard from '../Main/admin/Admindashboard'
import Techdashboard from '../Main/techsupport/Techdashboard'
import Dashboard from '../Main/user/Dashboard'

const Allroute = () => {
  return (
    <>
       <div>
       
         <Routes>
           <Route path='/' element={<Loginpage />} />
           <Route path='/signup' element={<Registerpage />} />
           <Route path='/admin/admindashboard' element={<Admindashboard />} />
           <Route path='/tech/techdashboard' element={<Techdashboard />} />
           <Route path='/user/userdashboard' element={<Dashboard />} />
         </Routes>
       </div>
    </>
  )
}

export default Allroute
