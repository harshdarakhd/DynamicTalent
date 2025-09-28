// src/theme/ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import themes from './themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, defaultTheme = 'clientA' }) => {
  const [themeKey, setThemeKey] = useState(() => {
    return localStorage.getItem('site-theme') || defaultTheme;
  });

  useEffect(() => {
    applyTheme(themes[themeKey]);
    localStorage.setItem('site-theme', themeKey);
  }, [themeKey]);

  function applyTheme(theme) {
    if (!theme) return;
    const root = document.documentElement;

    // apply colors
    if (theme.colors) {
      Object.entries(theme.colors).forEach(([prop, value]) => {
        root.style.setProperty(prop, value);
      });
    }

    // apply fonts
    if (theme.fonts) {
      Object.entries(theme.fonts).forEach(([prop, value]) => {
        root.style.setProperty(prop, value);
      });
    }
  }

  const switchTheme = (key) => {
    if (!themes[key]) {
      console.warn('Theme not found:', key);
      return;
    }
    setThemeKey(key);
  };

  return (
    <ThemeContext.Provider value={{ themeKey, theme: themes[themeKey], switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;