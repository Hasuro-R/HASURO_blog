import { useStore } from '@nanostores/react';
import './button.css';
import { colorThemeStore } from '../../../stores/colorTheme';

export default function ColorThemeChangeButton() {
    const theme = useStore(colorThemeStore);

    const handleTheme = () => {
        colorThemeStore.set(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div
            className='change-button-container'
            style={{justifyContent: 'var(--justify-content)', background: 'var(--change-button-gradation)'}}
            onClick={handleTheme}
        >
            <div className='change-button'>{theme === 'dark' ? '🌙' : '🌞'}</div>
        </div>
    );
};
