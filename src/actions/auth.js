import { types } from "../types/types";
import { enpoints } from "../types/endPoints";
export const authAsync = (email, password) => {
  return (dispatch) => {
    fetch(enpoints.login.url, {
      method: enpoints.login.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 300) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.serverResponse);
          dispatch(auth(data.serverResponse));
          return;
        }
        dispatch(error("Credenciales incorrectas"));
      });
  };
};
export const authRegister = (authRegisterData) => {
  return (dispatch) => {
    fetch(enpoints.register.url, {
      method: enpoints.register.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authRegisterData),
    })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
        dispatch(register(serverResponse));
      });
  };
};
export const authLogoutAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      localStorage.removeItem("token");
      dispatch(logout());
    }, 100);
  };
};
export const register = (response) => {
  return {
    type: types.authRegister,
    payload: response,
  };
};
export const auth = (token) => {
  return {
    type: types.authLogin,
    payload: token,
  };
};
export const logout = () => {
  return {
    type: types.authLogout,
    payload: null,
  };
};
export const error = (msn) => {
  return {
    type: types.authError,
    payload: msn,
  };
};
