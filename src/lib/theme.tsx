"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync with whatever the inline script already applied
  useEffect(() => {
    const root = document.documentElement;
    const initial = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initial);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("transitioning");
    root.classList.toggle("dark", next === "dark");

    setTheme(next);
    localStorage.setItem("theme", next);

    // Remove transition class after animation
    setTimeout(() => root.classList.remove("transitioning"), 350);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
