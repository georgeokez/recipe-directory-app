import React from 'react';
import NavBar from "../components/navBar/NavBar";
import ConfigBar from "../components/configBar/ConfigBar";
import RecipeGallary from "../components/recipeGallary/RecipeGallary";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <ConfigBar />
            <RecipeGallary />
        </div>
    );
};

export default HomePage;