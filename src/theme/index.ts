import { createTheme } from "@mui/material";

const font = "'Lexend', sans-serif";

const mediaQueryTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c3e50",
    },
    secondary: {
      main: "#fa7930ff",
      contrastText: "white",
    },
    background: {
      default: "lightgrey",
    },
  },
  typography: {
    fontFamily: font,
    h3: {
      [mediaQueryTheme.breakpoints.down("sm")]: {
        fontsize: "2rem",
      },
    },
    h4: {
      [mediaQueryTheme.breakpoints.down("sm")]: {
        fontsize: "1.75rem",
      },
    },
  },
});

export default theme;
