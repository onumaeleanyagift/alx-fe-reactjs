import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      name: "Spaghetti",
      ingredients: ["Pasta", "Tomato Sauce"],
      instructions: "Boil pasta and mix with sauce.",
    },
    {
      id: 2,
      name: "Fried Rice",
      ingredients: ["Rice", "Vegetables", "Egg"],
      instructions: "Fry rice with vegetables and egg.",
    },
  ],

  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),


  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipes] })),
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipe.map((recipe) =>
        recipe.Id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
}));

export default recipeStore;
