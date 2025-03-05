import { IRecipe } from "@/types/recipe-list";

export const getFavoriteRecipes = (): IRecipe[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
};

export const toggleFavorite = (
  recipe: IRecipe,
  favoriteRecipes: IRecipe[],
  setFavoriteRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>
) => {
  const updatedFavorites = [...favoriteRecipes];
  const isRecipeFavorite = updatedFavorites.some(
    (r) => r.idMeal === recipe.idMeal
  );

  if (isRecipeFavorite) {
    const filteredFavorites = updatedFavorites.filter(
      (r) => r.idMeal !== recipe.idMeal
    );
    setFavoriteRecipes(filteredFavorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(filteredFavorites));
  } else {
    updatedFavorites.push(recipe);
    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
  }
};

export const toggleFavoriteRecipe = (
  recipe: IRecipe | undefined,
  isFavorite: boolean,
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!recipe) return;

  const favoriteRecipes: IRecipe[] = JSON.parse(
    localStorage.getItem("favoriteRecipes") || "[]"
  );

  if (isFavorite) {
    const updatedFavorites = favoriteRecipes.filter(
      (item) => item.idMeal !== recipe.idMeal
    );
    localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
  } else {
    favoriteRecipes.push(recipe);
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }

  setIsFavorite(!isFavorite);
};
