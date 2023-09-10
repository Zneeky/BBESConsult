import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { createThemeSettings } from './theme/create-theme';

function App() {

  const mode = "dark";
  const theme = useMemo(() => createTheme(createThemeSettings(mode)), [mode]);
  return (
    <div className="app">

    </div>
  )
}

export default App
