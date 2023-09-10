import { useEffect, type ReactNode, useState, createContext } from 'react';
import type { colorContextType } from '../types/colorContextType';
import {useStore} from '@nanostores/react';
import { colorThemeStore } from '../stores/colorTheme';

export const ColorThemeContext = createContext<colorContextType>({
    theme: '',
    setTheme: undefined,
});

export default function ColorThemeProvider({children} : {children: ReactNode}) {
    const status = useStore(colorThemeStore);

    useEffect(() => {
        const root = window.document.documentElement;

        if (status === '') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                colorThemeStore.set('dark');
                root.setAttribute('color-theme', 'dark');
            } else {
                colorThemeStore.set('light');
                root.setAttribute('color-theme', 'light');
            };
        } else {
            colorThemeStore.set(status);
            root.setAttribute('color-theme', status);
        };
    }, [status]);

    return children;
};
