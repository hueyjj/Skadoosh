import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const darkTheme = () => (
  createMuiTheme({
    palette: {
      type: "dark",
      primary: { main: purple[500] },
      secondary: { main: "#11cb5f" },
    },
  })
);

export const defaultTheme = () => (
  createMuiTheme({
    palette: {
      // Nothing
    },
  })
);