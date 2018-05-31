import * as types from "../constants/ReviewActions";

const initialState = {
  reviewResults: [
    {
      availableSeats: "",
      career: "",
    },
  ],
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_REVIEW_RESULT): {
      return {
        ...state,
        reviewResults: action.payload,
      };
    }
    default:
      return state;
  }
}

export default review;