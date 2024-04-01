import React, { useContext, useEffect } from "react";
import "../Assest/style.css";
import { Link, useNavigate } from "react-router-dom";
import GlobalContext from "../Context/ContextApi";
// import users from "./Data";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginpage = () => {
  const ctxGlobal = useContext(GlobalContext);

  const navigate = useNavigate();

  const [isAuth, setIsAuth] = ctxGlobal.auth;

  const [user, setUser] = ctxGlobal.users;

  const [userData, setUserData] = ctxGlobal.userData;

  const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const {values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) =>{
       console.log(values);
       console.log(userData);

       const isValidate = userData.filter((data) => {
            return data.email === values.email && data.password === values.password;
          });
      
          console.log(isValidate);
      
          if (isValidate.length > 0) {
            setUser(isValidate[0]);
            localStorage.setItem('user', JSON.stringify(isValidate[0]));
            if(isValidate[0].role === "user"){
              navigate('/user/userdashboard')
            }else if(isValidate[0].role === "techsupport"){
              navigate('/tech/techdashboard')
            }else if(isValidate[0].role === "admin"){
              navigate('/admin/admindashboard')
            }
            console.log('User credentials are valid.');
            toast.success("send successfully");
          } else {
            console.log('Invalid credentials.');
          }

    }
  })

  useEffect(() =>{
    
    if(!user || user === null || user === undefined){
      navigate('/');
    }else{
      if(user.role === "user"){
        navigate('/user/userdashboard')
      }else if(user.role === "techsupport"){
        navigate('/tech/techdashboard')
      }else if(user.role === "admin"){
        navigate('/admin/admindashboard')
      }
    }
    
  },[user, navigate]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5 shadow-lg border-0 rounded-4">
              <form className="card-body cardbody-color p-lg-5 rounded-4" onSubmit={handleSubmit}>
                <div className="text-center">
                  <img
                    src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtaWNvbjQtamlyMjA2Mi1wb3ItMDMtbC5qcGc.jpg"
                    className="img-fluid profile-image img-thumbnail rounded-circle my-3"
                    width="100px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                <label className=" form-label mb-2">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    value={values.email}
                    onChange={handleChange}
                  />
                   {errors.email && touched.email ? (
                    <p className="form-error text-danger">{errors.email}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                <label className=" form-label mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                   {errors.password && touched.password ? (
                    <p className="form-error text-danger">{errors.email}</p>
                  ) : null}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-4 w-100"
                  >
                    Login
                  </button>
                  <ToastContainer />
                </div>

                <div
                  id="emailHelp"
                  className="form-text text-center mb-4 text-dark"
                >
                  Not Registered? <Link to="/signup"> Create an Account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
