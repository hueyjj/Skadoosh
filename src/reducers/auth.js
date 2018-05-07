import * as types from "../constants/AuthActions";

const initialState = {
  isFetchingLogin: false,
  isFetchingLogout: false,
  isFetchingSignup: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCHING_LOGIN): {
      return {
        ...state,
        isFetchingLogin: true,
      };
    }
    case (types.LOGIN_SUCCESSFUL): {
      return {
        ...state,
        isFetchingLogin: false,
      }
    }
    case (types.LOGIN_FAIL): {
      return {
        ...state,
        isFetchingLogin: false,
      }
    }
    case (types.FETCHING_LOGOUT): {
      return {
        ...state,
        isFetchingLogout: true,
      }
    }
    case (types.LOGOUT_SUCCESSFUL): {
      return {
        ...state,
        isFetchingLogout: false,
      }
    }
    case (types.LOGOUT_FAIL): {
      return {
        ...state,
        isFetchingLogout: false,
      }
    }
    case (types.FETCHING_SIGNUP): {
      return {
        ...state,
        isFetchingSignup: true,
      }
    }
    case (types.SIGNUP_SUCCESSFUL): {
      return {
        ...state,
        isFetchingSignup: false,
      }
    }
    case (types.SIGNUP_FAIL): {
      return {
        ...state,
        isFetchingSignup: false,
      }
    }
    default:
      return state;
  }
}

export default auth;