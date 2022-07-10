import React from 'react';
import ThemeButton from "./ThemeButton";

const ThemeSwitch = ({ handleNavBarColorChange }) => {
    return (
        <div className="theme-selector">
            <ThemeButton color="#6328a5" handleNavBarColorChange={handleNavBarColorChange} />
            <ThemeButton color="#26a678" handleNavBarColorChange={handleNavBarColorChange}/>
            <ThemeButton color="#c0013a" handleNavBarColorChange={handleNavBarColorChange}/>
        </div>
    );
}

export default ThemeSwitch;