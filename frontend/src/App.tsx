import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// import Home from "./Pages/Home";
import MainPage from "./Pages/MainPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F8EFC",
      dark: "#005BB5", // Darker shade of blue
      light: "#F0F4F7",
    },
    secondary: { main: "#7f7f70", dark: "#7f7f7f", light: "#E1E3E2" },
    background: { default: "#FDFFFC" },
    // background: { default: "lightblue" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "4.6rem",
      textAlign: "center",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Home /> */}
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
