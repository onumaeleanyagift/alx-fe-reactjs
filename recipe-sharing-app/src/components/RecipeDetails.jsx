import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeDetails = ({recipeDetails}) => {
    const recipe = useRecipeStore((state) =>
      state.recipes.find((recipe) => recipe.id === recipeDetails)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <Link to="/">Back to Recipes</Link>
        <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>

        <DeleteRecipeButton
          recipeId={recipe.id}
          onDeleteRecipe={handleDelete}
        />
      </div>
    );
};


export default RecipeDetails;