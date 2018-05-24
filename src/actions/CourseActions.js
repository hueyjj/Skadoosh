import {
  SET_COURSE_RESULT,
} from "../constants/CourseActions";

export const setCourseResult = (result) => ({
  type: SET_COURSE_RESULT,
  payload: result,
});