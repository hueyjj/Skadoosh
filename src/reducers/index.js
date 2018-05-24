import { combineReducers } from 'redux';

import drawer from "../reducers/drawer";
import auth from "../reducers/auth";
import api from "../reducers/api";
import course from "../reducers/course";

const rootReducer = combineReducers({
  drawer,
  auth,
  api,
  course,
});

export default rootReducer;
