import * as types from "../constants/CourseActions";

const initialState = {
  courseResults: [
    // {
    //   availableSeats: "",
    //   career: "",
    //   classNotes: "",
    //   classNum: "",
    //   credits: "",
    //   daysAndTimes: "",
    //   description: "",
    //   enrolled: "",
    //   enrollmentCapacity: "",
    //   generalEducation: "",
    //   grading: "",
    //   instructor: "",
    //   meetingDates: "",
    //   room: "",
    //   sectionAndLabs: [],
    //   status: "",
    //   title: "",
    //   type: "",
    //   waitlistCapacity: "",
    //   waitlistTotal: "",
    // },
  ],
};

const course = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_COURSE_RESULT): {
      return {
        ...state,
        courseResults: action.payload,
      };
    }
    default:
      return state;
  }
}

export default course;