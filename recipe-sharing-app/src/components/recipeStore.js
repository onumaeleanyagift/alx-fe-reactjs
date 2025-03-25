import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipes] })),
  setRecipes: (recipes) => set({ recipes })
}));

export default recipeStore;