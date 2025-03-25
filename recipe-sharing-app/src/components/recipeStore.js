import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipes] })),
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updateRecipe, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipe.map((recipe) =>
        recipe.updateRecipe == updateRecipe
          ? { ...recipe, ...updatedRecipe }
          : recipe
      ),
    })),

  deleteRecipe: (deleteRecipe) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.deleteRecipe !== deleteRecipe
      ),
    })),
}));

export default recipeStore;
