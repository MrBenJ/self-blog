import React, { createContext, useState } from 'react';
import MainTheme from './theme';
import LightTheme from './LightTheme';

const ProviderUnavailable = () => {
  throw Error('ThemeProvider is not available ');
};
const ThemeContext = createContext({
  currentTheme: MainTheme,
  setTheme: ProviderUnavailable,
  available: false
});

const THEMES = {
  main: MainTheme,
  light: LightTheme
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('main');

  const value = {
    currentTheme: THEMES[theme],
    setTheme,
    available: true
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
