import * as types from "../constants/ProfileActions";

const initialState = {
  isFetchingProfile: false,
  user: {
    username: "",
  },
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_PROFILE): {
      return {
        ...state,
        user: action.payload,
      };
    }
    case (types.FETCHING_PROFILE): {
      return {
        ...state,
        isFetchingProfile: true,
      };
    }
    case (types.FETCHING_PROFILE_SUCCESS): {
      return {
        ...state,
        isFetchingProfile: false,
      };
    }
    case (types.FETCHING_PROFILE_FAIL): {
      return {
        ...state,
        isFetchingProfile: false,
      };
    }
    default:
      return state;
  }
}

export default profile;