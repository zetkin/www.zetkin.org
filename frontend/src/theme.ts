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
  typography: {
    fontFamily: 'Catamaran',
    fontSize: 16,
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
  },
  spacing: 10,
});

export default theme;
