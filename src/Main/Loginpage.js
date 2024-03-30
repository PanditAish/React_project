import React, { useContext, useEffect, useState } from 'react'
import '../Assest/style.css'
import { Link, useNavigate } from 'react-router-dom'
import GlobalContext from '../Context/ContextApi'

const Loginpage = () => {

    const ctxGlobal = useContext(GlobalContext);
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = ctxGlobal.auth;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [storedUser, setStoredUser] = useState(null);

    useEffect(() => {
      const storedUserJSON = localStorage.getItem('user');
      if (storedUserJSON) {
        setStoredUser(JSON.parse(storedUserJSON));
      }
    }, []);

    const submitform = () =>{

        const newEntry = {email: email, password: password}
        console.log(newEntry);

        if (storedUser && storedUser.email === email && storedUser.password === password) {
          setIsAuth(true);
          if (localStorage.getItem('prevUrl') !== undefined && localStorage.getItem('prevUrl') !== null) {
            navigate(localStorage.getItem('prevUrl'));
            setTimeout(() => {
              localStorage.removeItem('prevUrl');
            }, 800);
          } else {
            alert('Login successful');
          }
        } else {
          alert('Invalid email or password');
        }
        
    }

  return (
    <>
       <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">

        <div className="card my-5 shadow">

          <form className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtaWNvbjQtamlyMjA2Mi1wb3ItMDMtbC5qcGc.jpg" className="img-fluid profile-image img-thumbnail rounded-circle my-3"
                width="160px" alt="profile" />
            </div>

            <div className="mb-3">
              <input type="text" name="email" onChange={ (e) => setEmail(e.target.value)} id="email" 
                placeholder="Email" className="form-control" required/>
            </div>
            <div className="mb-3">
              <input type="password" name='pass' onChange={ (e) => setPassword(e.target.value)} id="password" className="form-control" placeholder="Password" required/>
            </div>
            <div className="text-center"><button type="button"  onClick={submitform} className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <Link to='/signup'> Create an
                Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </>
  )
}

export default Loginpage
