import React from 'react';
import RecipeCard from "./RecipeCard";
import { useFetch } from '../hooks/useFetch';

const RecipeGallary = () => {

    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes');

    return (
        <div className="recipe-gallery-container">
            <div className="recipe-gallery-content">
                {isPending && <div>Loading ...</div>}
                {error && <div>{error}</div>}
                {recipes && recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default RecipeGallary;