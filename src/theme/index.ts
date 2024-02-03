import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";
import { Playfair_Display } from "next/font/google";

let theme = createTheme({
  typography: {
    fontFamily: "Playfair_Display",
    h1: {
      color: "#2b2b2b",
    },
    h3: {
      color: "#B2B2BB2",
    },
    h4: {
      lineHeight: 1.5,
    },
    h6: {
      color: "#C0C0C0",
    },
    body2: {
      color: "#C0C0C0",
      lineHeight: 1.5,
      letterSpacing: 1.5,
    },
  },

  palette: {
    mode: "dark",
    background: {
      default: "#1B1B1C",
    },
    primary: {
      main: "#059ef7",
    },
    secondary: {
      main: "#08203a",
    },
  },
});

theme = responsiveFontSizes(theme);
// export default theme;
export default theme;
