import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: blueGrey[500],
      light: blueGrey[100],
      dark: blueGrey[900],
    },
    },
    typography: {
      fontSize: 16,
      button: {
        fontSize: '1rem'
      }
    },
  },
);