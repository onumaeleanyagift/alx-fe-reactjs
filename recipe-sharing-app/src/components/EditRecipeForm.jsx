import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipes, onUpdateRecipe }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2 className="text-red-500">Recipe not found!</h2>;
  }

  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      name,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      instructions,
    };
    onUpdateRecipe(updatedRecipe);
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-bold">
            Ingredients (comma-separated):
          </label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-bold">Instructions:</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
