// @ts-nocheck
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleMode: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  return useContext(ThemeContext);
};
