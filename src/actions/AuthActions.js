import {
  getCookie,
} from "../utils/authUtils";

import {
  FETCHING_LOGIN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAIL,
  FETCHING_LOGOUT,
  LOGOUT_SUCCESSFUL,
  LOGOUT_FAIL,
  FETCHING_SIGNUP,
  SIGNUP_SUCCESSFUL,
  SIGNUP_FAIL,
} from "../constants/AuthActions";


export const fetchingLogin = ({
  type: FETCHING_LOGIN,
});

export const loginSuccessful = ({
  type: LOGIN_SUCCESSFUL,
});

export const loginFail = ({
  type: LOGIN_FAIL,
});

export const fetchLogin = ({ email, password }, callback) => async (dispatch, getState) => {
  dispatch(fetchingLogin);

  let url = "//localhost:8000/api/login";

  let form = new FormData();
  form.append("email", email);
  form.append("password", password);

  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    },
    body: form,
  })
    .then((response) => {
      let error; console.log(response);
      if (response.status === 200) {
        error = null;
        dispatch(loginSuccessful);
      } else {
        error = Error("Login failed - " + response.status + " status code.");
        dispatch(loginFail);
      }

      callback(error);
    })
    .catch((error) => {
      console.log(error)
    });
};

export const fetchingLogout = ({
  type: FETCHING_LOGOUT,
});

export const logoutSuccessful = ({
  type: LOGOUT_SUCCESSFUL,
});

export const logoutFail = ({
  type: LOGOUT_FAIL,
});

export const fetchLogout = (callback) => async (dispatch, getState) => {
  dispatch(fetchingLogout);

  let url = "//localhost:8000/api/logout";

  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    },
  })
    .then((response) => {
      let error; console.log(response);
      if (response.status === 200) {
        error = null;
        dispatch(logoutSuccessful);
      } else {
        error = Error("Logout failed - " + response.status + " status code.");
        dispatch(logoutFail);
      }

      callback(error);
    })
    .catch((error) => {
      console.log(error);
    })
};
