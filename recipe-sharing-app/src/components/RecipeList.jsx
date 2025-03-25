import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {useRecipeStore.map((recipe) => (
        <div key={recipe.iid}>
          <h3>{recipe.title}</h3>
          <p>{recipe.descriptin}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
