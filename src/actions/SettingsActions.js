import {
  SET_THEME,
} from "../constants/SettingsActions";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});