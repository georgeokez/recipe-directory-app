import React from 'react';

const NavBar = () => {
    return (
        <nav className="nav-bar-container">
            <nav className="nav-bar">
                <h1>Cooking Ninja</h1>
                <div className="nav-bar-menu-container ">
                    <label className="search-bar-label" for="search">Search:</label>
                    <input type="text" id="search" />
                    <button onClick={() => console.log('Clicking Create Recipe btn')}>Create Recipe</button>
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;