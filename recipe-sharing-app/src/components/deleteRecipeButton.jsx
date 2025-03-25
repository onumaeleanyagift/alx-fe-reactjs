import recipeDetails from "./recipeDetails";

const DeleteRecipeButton = ({ recipeDetails, onDeleteRecipe }) => {
  return (
    <button
      onClick={() => onDeleteRecipe(recipeDetails)}
    >
      Delete
    </button>
  );
};

export default deleteRecipeButton;
