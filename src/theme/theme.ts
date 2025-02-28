import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary:{
        main:'#00000',        
    },
    secondary:{
        main:"#0452fa"
    },
    text:{
        primary:'#121212',
        secondary:'#7c8696'
    },
    background:{
        paper:'white',
        default:'black',
    },
    divider:'#f0f3f5',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: 1.35,
    },
    h5: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: 1.45,
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 400,
      fontSize: "16px",
      fontStyle: "normal",
      textTransform: "none",      
    },
  },
});

export default theme;