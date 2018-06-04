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
  selectedCourses: [
    // course,
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
    case (types.ADD_SELECTED_COURSES): {
      return {
        ...state,
        selectedCourses: [
          ...state.selectedCourses,
          action.payload,
        ],
      };
    }
    default:
      return state;
  }
}

export default course;