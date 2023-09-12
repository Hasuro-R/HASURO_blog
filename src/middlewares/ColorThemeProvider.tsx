import { useEffect, type ReactNode } from 'react';
import {useStore} from '@nanostores/react';
import { colorThemeStore } from '../stores/colorTheme';

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
