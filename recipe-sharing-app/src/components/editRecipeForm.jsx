import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import recipeDetails from "./recipeDetails";

const EditRecipeForm = ({ recipes, onUpdateRecipe }) => {
    const navigate = useNavigate();

    const recipe = recipes.find((r) => r.recipeDetails === (recipeDetails));
};

export default editRecipeForm;