import { combineReducers } from 'redux';

import drawer from "../reducers/drawer";
import auth from "../reducers/auth";
import api from "../reducers/api";
import course from "../reducers/course";
import review from "../reducers/review";

const rootReducer = combineReducers({
  drawer,
  auth,
  api,
  course,
  review,
});

export default rootReducer;
