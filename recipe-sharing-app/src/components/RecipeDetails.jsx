import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeDetails = ({recipeDetails}) => {
    const recipe = useRecipeStore((state) =>
      state.recipes.find((recipe) => recipe.recipeDetails === recipeDetails)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <Link to="/">Back to Recipes</Link>
        <Link to={`/edit/${recipe.recipeDetails}`}>Edit Recipe</Link>
        <DeleteRecipeButton
          recipeId={recipe.recipeDetails}
          onDeleteRecipe={handleDelete}
        />
      </div>
    );
};


export default recipeDetails;