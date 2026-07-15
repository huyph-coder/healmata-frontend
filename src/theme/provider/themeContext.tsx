import React, { createContext } from "react";
import { AppTheme } from "../themes/theme.type";
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";

type ThemeContextType = {
    theme: AppTheme;
    setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = React.useState<AppTheme>(LightTheme);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>);
}

export { ThemeProvider, ThemeContext };
export type { ThemeContextType };