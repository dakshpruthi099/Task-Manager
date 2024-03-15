// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A27B5C', // Use your palette's accent color here
    },
    secondary: {
      main: '#3F4E4F', // Another color from your palette
    },
    // Add other colors as needed
  },
  // You can also customize typography, breakpoints, and other aspects here
});

export default theme;
