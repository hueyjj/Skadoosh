import { combineReducers } from 'redux';

import drawer from "../reducers/drawer";
import auth from "../reducers/auth";
import api from "../reducers/api";

const rootReducer = combineReducers({
  drawer,
  auth,
  api,
});

export default rootReducer;
