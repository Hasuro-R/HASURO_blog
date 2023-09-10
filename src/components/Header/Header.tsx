import { useContext } from "react";
import { ColorThemeContext } from "../../middlewares/ColorThemeProvider";
import './header.css';
import { useStore } from "@nanostores/react";
import { colorThemeStore } from "../../stores/colorTheme";

export default function Header() {
    const theme = useStore(colorThemeStore);

    return (
        <div className='header-container' style={{backgroundColor: 'rgba(var(--background-theme-color), 0.8)'}}>
            <div className='header'>
                <div className='icon-box'>
                    <img src={theme === 'dark' ? '/logo/HASURO_blog_logo_dark.png' : '/logo/HASURO_blog_logo_dark.png'} alt='icon' className='icon' />
                </div>
            </div>
        </div>
    );
};
