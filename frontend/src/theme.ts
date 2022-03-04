import { createTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ee323e',
    },
    secondary: {
      main: '#48baeb',
    },
    error: {
      main: '#ff1744',
    },
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 10,
});

export default theme;
