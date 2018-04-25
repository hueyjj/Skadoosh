import { combineReducers } from 'redux';

import drawer from "../reducers/drawer";

const rootReducer = combineReducers({
  drawer,
});

export default rootReducer;
