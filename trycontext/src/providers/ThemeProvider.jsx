import { useState } from 'react';
import ThemeContext from '../contexts/themeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
