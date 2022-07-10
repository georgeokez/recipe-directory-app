import React, {useState, useCallback, useEffect} from "react";
import {useFetch} from "../hooks/useFetch";
import {useNavigate} from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data: recipes, error } = useFetch("http://localhost:3000/recipes");
  const [ingredients, setIngredients] = useState([]);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [cookTime, setCookTime] = useState(0);
  const [ingredientValue, setIngredientValue] = useState("");

  const handleAddIngredient = useCallback(() => {
      let ingredient = ingredientValue.concat(', ');
      setIngredients([...ingredients, ingredient]);
      setIngredientValue("");
  }, [ingredients, ingredientValue]);

  const handleCreateRecipe = useCallback(() => {
      let id = 1;

      if (!error && recipes && recipes.length > 0) {
          id = recipes.length + 1;
      }

      const recipePost = {
          id,
          title: recipeTitle,
          ingredients,
          cookTime,
          description: recipeDescription
      }

      postRecipeAndNavigate(recipePost);
  }, [recipeTitle, ingredients, cookTime, recipeDescription]);

  const postRecipeAndNavigate = async (recipePost) => {
      try {
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(recipePost)
          };
          await fetch('http://localhost:3000/recipes/', requestOptions);
          navigate('/');
      } catch (error) {
          console.log("Error: ", error);
      }
  }

  return (
    <div className="create-recipe">
      <div className="create-recipe-form">
          <h1>Add a New Recipe</h1>
          <label className="recipe-title">
              Recipe title:
              <input
                  onChange={(e) => setRecipeTitle(e.target.value)}
                  value={recipeTitle}
                  type="text"
              />
          </label>
          <label className="recipe-ingredients">
              Recipe Ingredients:
              <div className="recipe-ingredients-input">
                  <input
                      onChange={(e) => setIngredientValue(e.target.value)}
                      value={ingredientValue}
                      type="text"
                  />
                  <button onClick={handleAddIngredient}>add</button>
              </div>
              <p>
                  Current ingredients:
                  {ingredients.map((ingredient, index) => (
                      <span key={index}><i>{ingredient}</i></span>
                  ))}
              </p>
          </label>
          <label className="recipe-description">
              Recipe Method:
              <textarea
                onChange={(e) => setRecipeDescription(e.target.value)}
                value={recipeDescription}
              />
          </label>
          <label className="recipe-cook-time">
              Cook Time (minutes):
              <input
                  onChange={(e) => setCookTime(e.target.value)}
                  value={cookTime}
                  type="number"
              />
          </label>
          <div className="recipe-form-footer">
            <button className="submit-button" onClick={handleCreateRecipe}>Create Recipe</button>
          </div>
      </div>
    </div>
  );
}

export default CreateRecipe;