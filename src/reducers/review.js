import * as types from "../constants/ReviewActions";

const initialState = {
  reviewResults: [
    // {
    //   courseTitle: "",
    //   created: "",
    //   modified: "",
    //   author: "",
    //   comment: "",
    //   rating: "",
    // },
  ],
};

const review = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_REVIEWS_RESULT): {
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