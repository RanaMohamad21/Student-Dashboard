import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./Pages/Home";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import requireAuth from "./utils/requireAuth";
import { Provider } from "react-redux";
import {store } from "./app/store"
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
const ProtectedDashboard = requireAuth(MainPage);

function App() {
  return (
   <Provider store = {store}>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedDashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
   </Provider>
  );
}

export default App;
