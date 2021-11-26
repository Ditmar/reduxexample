import React from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { authRegister } from "../../actions/auth";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const RegisterComponent = () => {
  const dispatch = useDispatch();
  const [form, handlerChangeForm, handlerResetForm] = useForm({
    username: "Jose",
    email: "jose@gmail.com",
    password: "1234",
    repassword: "1234",
  });
  const { username, password, email, repassword } = form;
  const { auth } = useSelector((state) => state);
  const { msnregister } = auth;
  const handlerSubmit = (e) => {
    e.preventDefault();
    //validacion
    dispatch(authRegister({ name: username, password, email }));
  };
  return (
    <>
      {msnregister == null ? (
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Register </h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fab fa-facebook-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-google-plus-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter-square"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={handlerSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                      name="username"
                      value={username}
                      onChange={handlerChangeForm}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                      name="email"
                      value={email}
                      onChange={handlerChangeForm}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={handlerChangeForm}
                    />
                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="re-spassword"
                      name="repassword"
                      value={repassword}
                      onChange={handlerChangeForm}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
      ;
    </>
  );
};
