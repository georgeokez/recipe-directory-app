import React from 'react';
import ThemeSwitch from "./ThemeSwitch";
import DayNightSwitch from "./DayNightSwtich";

const ConfigBar = ({ handleNavBarColorChange }) => {
    return (
        <div className="config-bar-container">
            <div className="config-bar">
                <DayNightSwitch />
                <ThemeSwitch handleNavBarColorChange={handleNavBarColorChange}/>
            </div>
        </div>
    );
}

export default ConfigBar;