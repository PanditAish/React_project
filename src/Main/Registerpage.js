import React, { useContext, useRef, useState } from "react";
import GlobalContext from "../Context/ContextApi";

const Registerpage = () => {

  const globalCtx = useContext(GlobalContext);
   
  const [user, setUser] = globalCtx.users;

  const role = useRef(null);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [conpassword, setConpassword] = useState("");

  const handleSubmit = () => {
    const payload = { role: role.current.value, email: email, password:password, conpassword:conpassword };
    setUser(payload);
    localStorage.setItem("user", JSON.stringify(payload));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5 shadow">
              <form className="card-body cardbody-color p-lg-5">
                <div className="form-group mb-3">
                  <select
                    className="form-control"
                    ref={role}
                  >
                    <option value="user">User</option>
                    <option value="techsupport">Tech Support</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="conpassword"
                    placeholder="Confirm password"
                    onChange={(e) => setConpassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-color px-5 mb-5 w-100"
                    onClick={handleSubmit}
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
