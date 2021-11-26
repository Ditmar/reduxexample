import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdPersonPin, MdVpnKey } from "react-icons/md";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { authAsync, auth } from "../../actions/auth";
import { useSelector } from "react-redux";

export const LoginComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
      dispatch(auth(token));
    }
  }, []);
  const { auth: authRename, msnerror } = useSelector((state) => state);
  const { token } = authRename;
  const [form, handlerChangeForm, handlerResetForm] = useForm({
    email: "pepe@gmail.com",
    password: "123456",
  });
  const { email, password } = form;
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(authAsync(email, password));
  };
  return (
    <>
      {token == null ? (
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handlerSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <MdPersonPin />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={handlerChangeForm}
                      autoComplete="off"
                      placeholder="username"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <MdVpnKey />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      value={password}
                      autoComplete="off"
                      onChange={handlerChangeForm}
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" /> Remember Me
                  </div>
                  {msnerror && <div>{msnerror} </div>}
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account? <Link to="/register"> Sign Up </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
