import * as types from "../constants/CounterActions";

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case (types.INC_COUNTER): {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case (types.DEC_COUNTER): {
      return {
        ...state,
        count: state.count - 1,
      }
    }

    default:
      return state;
  }
}

export default counter;