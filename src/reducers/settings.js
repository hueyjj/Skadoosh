import * as types from "../constants/SettingsActions";

import {
  defaultTheme,
} from "../utils/themeUtils";

const initialState = {
  theme: defaultTheme(),
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case (types.SET_THEME): {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
}

export default settings;