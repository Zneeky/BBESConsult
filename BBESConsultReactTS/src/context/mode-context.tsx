import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

type Mode = 'light' | 'dark';

interface Props {
  children: ReactNode;
}

interface ModeContextProps {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextProps | undefined>(undefined);

export const ModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('light'); // default to light mode

  useEffect(() => {
    // On initial load, get mode from cookies or default to 'light'
    const savedMode = Cookies.get('theme-mode') as Mode || 'light';
    console.log("Saved Mode from Cookie:", savedMode);
    setMode(savedMode);
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    Cookies.set('theme-mode', newMode, { expires: 365 }); // store mode in cookie for 1 year
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
