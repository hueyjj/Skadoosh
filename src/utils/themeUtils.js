/** @module */

import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

/**
 * Creates a dark theme
 * @returns {MuiTheme} A dark theme
 */
export const darkTheme = () => (
  createMuiTheme({
    palette: {
      type: "dark",
      primary: { main: purple[500] },
      secondary: { main: "#11cb5f" },
    },
  })
);

/**
 * Creates a default theme
 * @returns {MuiTheme} A default theme
 */
export const defaultTheme = () => (
  createMuiTheme({
    palette: {
      // Nothing
    },
  })
);