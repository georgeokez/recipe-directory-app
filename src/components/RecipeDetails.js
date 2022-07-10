import React from 'react';
import { useParams } from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

const RecipeDetails = () => {
    const { id } = useParams();
    const { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`);

    const { title, cookTime, ingredients, description } = recipe ? recipe : {};

    return (
        <div className="recipe-details-container">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {recipe &&
                <div className="recipe-details-content">
                    <h1>{title}</h1>
                    <h2>{`Takes ${cookTime} minutes to cook.`}</h2>
                    <div className="recipe-ingredients">
                        <b>Ingredients: </b>
                        {ingredients.map((ingredient, index) => (
                            <span key={index}>{ingredient}</span>
                        ))}
                    </div>
                    <p>{description}</p>
                </div>
            }
        </div>
    )
}

export default RecipeDetails;
