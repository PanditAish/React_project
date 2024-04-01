import React, { useContext, useEffect } from 'react'
import GlobalContext from '../../Context/ContextApi';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const Techdashboard = () => {

    const conGlobal = useContext(GlobalContext);

    const [user, setUser] = conGlobal.users;
    
    const navigate = useNavigate();

    useEffect(() =>{
      if(!user || user === null || user === undefined){
        navigate('/');
      }
    },[user, navigate]);

  return (
    <>
    <Header />
    <div>
      <h1 className='text-white'>Techdashboard</h1>
    </div>
    </>
  )
}

export default Techdashboard
