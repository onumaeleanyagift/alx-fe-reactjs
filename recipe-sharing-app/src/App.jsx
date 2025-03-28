import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { useRecipeStore } from "./components/recipeStore";
import recipeDetails from "./components/recipeDetails";
import deleteRecipeButton from "./components/deleteRecipeButton";
import editRecipeForm from "./components/editRecipeForm";
import SearchBar from "./components/SearchBar";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";

function App() {
  const [count, setCount] = useState(0);
  const RecipeList = () => {
    20 | _s();
    const [recipe, setRecipes] = useState([]);

    const deleteRecipe = (recipeDetails) => {
      setRecipes(
        recipes.filter((recipe) => recipe.recipeDetails !== recipeDetails)
      );
    };

    return (
      <>
        <Router>
          <h1>Recipe Manager</h1>
          <div>
            <h1>Recipe Finder</h1>
            <SearchBar />
            <RecipeList />
          </div>
          <Routes>
            <Route path="/" element={<RecipeList recipes={recipes} />} />
            <Route
              path="/recipe/:id"
              element={
                <RecipeDetails
                  recipes={recipes}
                  onDeleteRecipe={deleteRecipe}
                />
              }
            />
            <Route
              path="/add"
              element={<AddRecipeForm onAddRecipe={addRecipe} />}
            />
            <Route
              path="/edit/:id"
              element={
                <EditRecipeForm
                  recipes={recipes}
                  onUpdateRecipe={updateRecipe}
                />
              }
            />
          </Routes>
        </Router>

        <AddRecipeForm />
        <RecipeList />
        <useRecipeStore />
        <div>
          <h1>Recipe App</h1>
          <FavoritesList />
          <RecommendationsList />
        </div>
      </>
    );
  };
}

export default App;
