import React, {useCallback} from 'react';
import {Link, useNavigate} from "react-router-dom";

const NavBar = ({ color }) => {

    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate('/create-recipe');
    }, []);

    const btnStyle = {
        backgroundColor: color,
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: color,
        }
    }

    return (
        <div className="nav-bar-container" style={{backgroundColor: color}}>
            <nav className="nav-bar">
                <Link to="/">
                    <h1 className="header-logo">Cooking Ninja</h1>
                </Link>
                <div className="nav-bar-menu-container">
                    <label className="search-bar-label" htmlFor="search">Search:</label>
                    <input type="text" id="search" />
                    <button onClick={handleClick} style={btnStyle}>Create Recipe</button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;