/** @module */

import {
  SET_SELECTED_COURSE,
} from "../constants/DiagramActions";

export const setSelectedCourse = (course) => ({
  type: SET_SELECTED_COURSE,
  payload: course,
});