/** @module */

import {
  API_URL,
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

/**
 * This callback receives an error or null after logging in
 * @callback loginCallback
 * @param {Error} error Holds server response status and message
 */
/**
 * Logs in the user by sending a POST request with the user's email and password to the server 
 * @function
 * @param {object} credentials User credentials
 * @param {string} crendentials.email User email
 * @param {string} crendentials.password User password
 * @param {loginCallback} callback - A post callback after attempting to log in
 */
export const fetchLogin = ({ email, password }, callback) => (dispatch, getState) => {
  dispatch(fetchingLogin);

  let url = process.env.REACT_APP_API_URL + "api/login";

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
    .then(res => {
      return res.json()
        .then((data) => ({
          status: res.status,
          body: data,
        }))
    })
    .then((response) => {
      let error;
      if (response.status === 200) {
        error = null;
        dispatch(loginSuccessful);
      } else {
        error = Error("Login failed - " + response.status + " status code. Server message: " + response.body.message);
        dispatch(loginFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(loginFail);
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

/**
 * This callback receives an error or null after logging out
 * @callback logoutCallback
 * @param {Error} error Holds server response status and message
 */
/**
 * Logs out the user by sending a POST request with the user's session id (stored in cookie)
 * @function
 * @param {logoutCallback} callback - A post callback after attempting to log out
 */
export const fetchLogout = (callback) => (dispatch, getState) => {
  dispatch(fetchingLogout);

  let url = process.env.REACT_APP_API_URL + "api/logout";

  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    },
  })
    .then(res => {
      return res.json()
        .then((data) => ({
          status: res.status,
          body: data,
        }))
    })
    .then((response) => {
      let error;
      if (response.status === 200) {
        error = null;
        dispatch(logoutSuccessful);
      } else {
        error = Error("Logout failed - " + response.status + " status code. Server message: " + response.body.message);
        dispatch(logoutFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(logoutFail);
      console.log(error);
    })
};

export const fetchingSignup = ({
  type: FETCHING_SIGNUP,
});

export const signupSuccessful = ({
  type: SIGNUP_SUCCESSFUL,
});

export const signupFail = ({
  type: SIGNUP_FAIL,
});

/**
 * This callback receives an error or null after signing up
 * @callback signupCallback
 * @param {Error} error Holds server response status and message
 */
/**
 * Creates an account for the user by sending a POST request with the user's email and password
 * @function
 * @param {signupCallback} callback - A post callback after attempting to sign up
 */
export const fetchSignup = ({ email, password, confirmPassword, }, callback) => async (dispatch, getState) => {
  dispatch(fetchingSignup);

  let url = process.env.REACT_APP_API_URL + "api/signup";

  let form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("confirm_password", confirmPassword);

  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    },
    body: form,
  })
    .then(res => {
      return res.json()
        .then((data) => ({
          status: res.status,
          body: data,
        }))
    })
    .then((response) => {
      let error;
      if (response.status === 200) {
        error = null;
        dispatch(signupSuccessful);
      } else {
        error = Error("Signup failed: " + response.status + " status code. Server message: " + response.body.message);
        dispatch(signupFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(signupFail);
      console.log(error)
    });
}