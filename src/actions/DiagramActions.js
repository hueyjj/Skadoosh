/** @module */

import {
  SET_SELECTED_CMPS_COURSE,
} from "../constants/DiagramActions";

export const setSelectedCmpsCourse = (course) => ({
  type: SET_SELECTED_CMPS_COURSE,
  payload: course,
});