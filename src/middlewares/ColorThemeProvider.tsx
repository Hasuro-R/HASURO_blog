import { useEffect, type ReactNode, useState, createContext } from 'react';
import type { colorContextType } from '../types/colorContextType';
import { colorThemeKey } from '../lib/key';

export const ColorThemeContext = createContext<colorContextType>({
    theme: '',
    setTheme: undefined,
});

export default function ColorThemeProvider({children} : {children: ReactNode}) {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const colorTheme = localStorage.getItem(colorThemeKey);
        const root = window.document.documentElement;

        if (colorTheme) {
            setTheme(colorTheme);
            root.setAttribute('color-theme', colorTheme);
        } else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
                root.setAttribute('color-theme', 'dark');
            } else {
                setTheme('light');
                root.setAttribute('color-theme', 'light');
            };
        };
    }, []);

    return (
        <ColorThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ColorThemeContext.Provider>
    );
};
