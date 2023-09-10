import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type Mode = 'light' | 'dark';

interface ThemeContextProps {
  mode: Mode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Mode>('light'); // default to light mode

  useEffect(() => {
    // On initial load, get mode from cookies or default to 'light'
    const savedMode = Cookies.get('theme-mode') as Mode || 'light';
    setMode(savedMode);
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    Cookies.set('theme-mode', newMode, { expires: 365 }); // store mode in cookie for 1 year
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
