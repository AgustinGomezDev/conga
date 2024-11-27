'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types/theme';

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            return savedTheme;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'oscuro' : 'claro';
    });

    useEffect(() => {
        document.documentElement.classList.remove('claro', 'oscuro'); // remove all classes
        document.documentElement.classList.add(theme); // add theme class
        localStorage.setItem('theme', theme); // save the theme in the localStorage
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, useTheme }