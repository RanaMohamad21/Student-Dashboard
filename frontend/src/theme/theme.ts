import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F8EFC",
      dark: "#005BB5",
      light: "#F0F4F7",
    },
    secondary: { main: "#7f7f70", dark: "#7f7f7f", light: "#E1E3E2" },
    background: { default: "#FDFFFC" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "4.6rem",
      textAlign: "center",
    },
  },
});

export default theme;
