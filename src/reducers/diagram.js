import * as types from "../constants/DiagramActions";

const initialState = {
  selectedCmpsCourse: "",
};

const diagram = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_SELECTED_CMPS_COURSE): {
      return {
        ...state,
        selectedCmpsCourse: action.payload,
      };
    }
    default:
      return state;
  }
}

export default diagram;