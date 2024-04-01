import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import GlobalContext from '../Context/ContextApi';

const Header = () => {

    const ctxGlobal = useContext(GlobalContext);
    
     const [user, setUser] = ctxGlobal.users;
      const navigate = useNavigate();

     const logoutfun = () =>{
        localStorage.removeItem("user");
        setUser('');
        navigate('/');
     }

  return (
    <>
       <nav className="navbar navbar-expand-lg bg-light">
       <div className='container-fluid'>
       <img src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtaWNvbjQtamlyMjA2Mi1wb3ItMDMtbC5qcGc.jpg'
         className='imguser' alt='userimg' />
        <div className="" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-row">
             <li className='nav-item mx-3'>
              <p
                className="nav-bar" 
              >
                {user.email}
              </p>
              </li>
              <li className='nav-item'>
              <NavLink
                className="nav-bar"
                to="/" 
                onClick={() =>logoutfun()} 
              >
                logout
              </NavLink>
            </li>
            </ul>
            </div>
        </div>
       </nav>
    </> 
  )         
}

export default Header
