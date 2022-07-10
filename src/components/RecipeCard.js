import React, {useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import TrimText from "./TrimText";

const RecipeCard = ({ recipe }) => {

    const navigate = useNavigate();

    const { id, title, cookTime, description } = recipe;

    const handleClick = useCallback(()=> {
        console.log('Clicking Button');
        navigate(`/recipes/${id}`);
    }, [navigate]);

    return (
        <div className="recipe-card">
            <div className="recipe-card-body">
                <h2>{title}</h2>
                <h3>{cookTime + 'minutes to make.'}</h3>
                <TrimText text={description} maxLength={150}/>
            </div>
            <div className="recipe-card-footer">
                <button onClick={handleClick}>Cook This</button>
            </div>
        </div>
    );
}

export default RecipeCard;