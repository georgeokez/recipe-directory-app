import React, { useCallback } from 'react';

const ThemeButton = ({ color, handleNavBarColorChange }) => {

    const handleClick = useCallback(() => {
        console.log(color);
        handleNavBarColorChange(color);
    },[color]);

    return (
        <button onClick={handleClick} className="theme-button" style={{ backgroundColor: color }}></button>
    );
}

export default ThemeButton;