import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ConfigBar from "./components/ConfigBar";
import RecipeGallary from "./components/RecipeGallary";
import RecipeDetails from "./components/RecipeDetails";

import './App.scss';
import CreateRecipe from "./components/CreateRecipe";

function App() {
  const [navBarColor, setNavBarColor] = useState('#6328a5');

  const handleNavBarColorChange = useCallback((color) => {
      setNavBarColor(color);
  }, []);

  return (
    <div className="App">
        <Router>
            <NavBar color={navBarColor} />
            <ConfigBar handleNavBarColorChange={handleNavBarColorChange} />
            <Routes>
                <Route exact path="/" element={<RecipeGallary />}/>
                <Route path="/recipes/:id" element={<RecipeDetails />}/>
                <Route path="/create-recipe" element={<CreateRecipe />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
