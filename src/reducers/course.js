import * as types from "../constants/CourseActions";

const initialState = {
  courseResult: {
    availableSeats: "",
    career: "",
    classNotes: "",
    classNum: "",
    credits: "",
    daysAndTimes: "",
    description: "",
    enrolled: "",
    enrollmentCapacity: "",
    generalEducation: "",
    grading: "",
    instructor: "",
    meetingDates: "",
    room: "",
    sectionAndLabs: [],
    status: "",
    title: "",
    type: "",
    waitlistCapacity: "",
    waitlistTotal: "",
  },
};

const api = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_COURSE_RESULT): {
      return {
        ...state,
        courseResult: action.payload,
      };
    }
    default:
      return state;
  }
}

export default api;