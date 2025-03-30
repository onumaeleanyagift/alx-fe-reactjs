import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id]);

  if (!recipe) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-lg mx-auto rounded-lg shadow-md"
      />
      <p className="text-gray-600 text-center mt-4">{recipe.summary}</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Ingredients:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Instructions:</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;