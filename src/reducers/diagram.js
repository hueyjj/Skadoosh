import * as types from "../constants/DiagramActions";

const initialState = {
  selectedCourse: "",
};

const diagram = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_SELECTED_COURSE): {
      return {
        ...state,
        selectedCourse: action.payload,
      };
    }
    default:
      return state;
  }
}

export default diagram;