import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ee323e",
    },
    secondary: {
      main: "#48baeb",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
