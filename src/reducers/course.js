import * as types from "../constants/ApiActions";

const initialState = {
  isFetchingCourse: false,
};

const api = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCHING_COURSE): {
      return {
        ...state,
        isFetchingCourse: true,
      };
    }
    case (types.FETCHING_COURSE_SUCCESS): {
      return {
        ...state,
        isFetchingCourse: false,
      }
    }
    case (types.FETCHING_COURSE_FAIL): {
      return {
        ...state,
        isFetchingCourse: false,
      }
    }
    default:
      return state;
  }
}

export default api;