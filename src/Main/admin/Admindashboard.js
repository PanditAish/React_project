import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../Context/ContextApi';
import Header from '../Header';

const Admindashboard = () => {

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
       <h1 className='text-white'> Admindashboard</h1>
    </div>
    </>
  )
}

export default Admindashboard
