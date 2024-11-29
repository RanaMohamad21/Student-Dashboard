import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./Pages/Home";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import requireAuth from "./utils/requireAuth";
import { Provider } from "react-redux";
import { store } from "./app/store";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import theme from "./theme/theme";

const ProtectedDashboard = requireAuth(MainPage);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<ProtectedDashboard />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
