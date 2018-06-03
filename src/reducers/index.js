import { combineReducers } from 'redux';

import drawer from "../reducers/drawer";
import auth from "../reducers/auth";
import api from "../reducers/api";
import course from "../reducers/course";
import review from "../reducers/review";
import diagram from "../reducers/diagram";
import settings from "../reducers/settings";

const rootReducer = combineReducers({
  drawer,
  auth,
  api,
  course,
  review,
  diagram,
  settings,
});

export default rootReducer;
