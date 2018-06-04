/** @module */

import {
  ADD_SELECTED_COURSES,
} from "../constants/CourseActions";

export const addSelectedCourse = (course) => ({
  type: ADD_SELECTED_COURSES,
  payload: course,
});