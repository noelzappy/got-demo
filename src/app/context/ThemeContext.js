import themes from "app/theme";
import { createContext, useState, useEffect } from "react";

/* Creating a context object with a default value of light and a function that does nothing. */
const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

/**
 * A context provider that will allow access the current theme and the function to
 * update the theme from anywhere in our app
 */
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const handleUpdateTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const setCSSVariables = (theme) => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  };

  useEffect(() => {
    setCSSVariables(themes[currentTheme]);
  });

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: handleUpdateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
