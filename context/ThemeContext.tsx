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
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>(() => {

        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (savedTheme) {
                return savedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
        }
        return 'claro';
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('claro', 'oscuro', 'noche', 'naturaleza', 'retro', 'brillante', 'apagado');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // if the component isn't mounted the app is not rendered
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, useTheme }