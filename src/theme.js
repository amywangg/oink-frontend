import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

export const muiTheme = createMuiTheme({
  props: {
    MuiInputBase: {
      disableripple: "true",
    },
  },
  palette: {
    primary: { main: pink[50] },
    secondary: { main: pink[100] },
    tertiary: { main: "#ff0044" },
  },
  sizing: {
    sideBar: { width: "15%" },
    drilldownBar: { width: "25%" },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontFamily: "Rubik",
    },
    h2: {
      fontFamily: "Rubik",
    },
    h3: {
      fontFamily: "Rubik",
    },
    h4: {
      fontFamily: "Rubik",
    },
    h5: {
      fontFamily: "Rubik",
    },
    h6: {
      fontFamily: "Rubik",
    },
  },
});
