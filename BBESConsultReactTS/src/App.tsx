import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { createThemeSettings } from "./theme/create-theme";
import { ModeProvider, useMode } from "./context/mode-context";
import HomePage from "./pages/home";

function AppContent() {
  const { mode } = useMode();
  const theme = useMemo(() => createTheme(createThemeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path = "/" element={<HomePage/>}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ModeProvider>
      <AppContent />
    </ModeProvider>
  );
}

export default App;
