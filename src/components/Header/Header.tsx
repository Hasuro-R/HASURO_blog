import './header.css';
import { useStore } from "@nanostores/react";
import { colorThemeStore } from "../../stores/colorTheme";
import ColorThemeChangeButton from '../UI/Button/ColorThemeChangeButton';

export default function Header() {
    const theme = useStore(colorThemeStore);

    return (
        <div className='header-container' style={{backgroundColor: 'rgba(var(--background-theme-color), 0.8)'}}>
            <div className='header'>
                <div className='icon-box'>
                    <a href='/' className='icon-link'>
                        <img src={theme === 'dark' ? '/logo/HASURO_blog_logo_dark.png' : '/logo/HASURO_blog_logo_light.png'} alt='icon' className='icon' />
                    </a>
                </div>
                <ColorThemeChangeButton />
            </div>
        </div>
    );
};
