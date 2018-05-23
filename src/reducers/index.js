import { combineReducers } from 'redux';

import drawer from "../reducers/drawer";
import auth from "../reducers/auth";

const rootReducer = combineReducers({
  drawer,
  auth,
});

export default rootReducer;
