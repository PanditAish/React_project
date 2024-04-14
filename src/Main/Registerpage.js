import React, { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../Context/ContextApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUser } from "./Data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  const globalCtx = useContext(GlobalContext);

  const navigate = useNavigate();

  const [user, setUser] = globalCtx.users;

  const [userData, setUserData] = globalCtx.userData;

  const role = useRef(null);

  const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    conpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const initialValues = {
    email: "",
    password: "",
    conpassword: "",
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      const payload = { role: role.current.value, ...values };

      // const previousData = JSON.parse(localStorage.getItem("user")) || {};

      // const newData = { ...previousData, ...payload };

      
      const newData = { ...payload };

      addUser(newData, setUserData);

      toast.success("Registration successfully");

      setUser(payload);
      localStorage.setItem('user', JSON.stringify(payload));

      if (payload.role === "user") {
        navigate("/user/userdashboard");
      } else if (payload.role === "techsupport") {
        navigate("/tech/techdashboard");
      } else if (payload.role === "admin") {
        navigate("/admin/admindashboard");
      }

      // console.log('user registered',newData);

      // localStorage.setItem("user", JSON.stringify(newData));

      // setUser(newData);
    },
  });

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
            <div className="card my-5 shadow border-0 rounded-2">
              <form
                className="card-body cardbody-color p-lg-5 rounded-2"
                onSubmit={handleSubmit}
              >
                <div className="form-group mb-3">
                  <select className="form-control" ref={role}>
                    <option value="user" selected>
                      User
                    </option>
                    <option value="techsupport">Tech Support</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className=" form-label mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error text-danger">{errors.email}</p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label className=" form-label mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error text-danger">{errors.password}</p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label className=" form-label mb-2" htmlFor="conpassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="conpassword"
                    name="conpassword"
                    placeholder="Confirm password"
                    value={values.conpassword}
                    onChange={handleChange}
                  />
                  {errors.conpassword && touched.conpassword ? (
                    <p className="form-error text-danger">
                      {errors.conpassword}
                    </p>
                  ) : null}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-100 mt-3"
                    // onClick={handleSubmit}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerpage;
