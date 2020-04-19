import React, { createContext, useState } from 'react';
import { css } from '@emotion/core';
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

  const { currentTheme } = value;

  const style = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      color: ${currentTheme.typography.header.color};
      font-size: ${currentTheme.typography.header.size};
    }

    h2 {
      color: ${currentTheme.typography.subhead.color};
      font-size: ${currentTheme.typography.subhead.size};
    }

    p,
    span {
      color: ${currentTheme.typography.body.color};
      font-size: ${currentTheme.typography.body.size};
    }
  `;

  return (
    <ThemeContext.Provider value={value}>
      <div css={style}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
