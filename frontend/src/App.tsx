import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// import Home from "./Pages/Home";
import MainPage from "./Pages/MainPage";

const theme = createTheme({
  palette: {
    primary: { main: "#3F8EFC" },
    secondary: { main: "#68B684" },
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
      <CssBaseline/>
      {/* <Home /> */}
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
