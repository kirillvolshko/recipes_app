import { useState, useEffect } from "react";
import { IRecipe } from "@/types/recipe-list";

export const useFavoriteRecipe = (data: IRecipe | null) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const storedFavorites: IRecipe[] = JSON.parse(
      localStorage.getItem("favoriteRecipes") || "[]"
    );
    setFavoriteRecipes(storedFavorites);

    if (data) {
      const isInFavorites = storedFavorites.some(
        (recipe) => recipe.idMeal === data.idMeal
      );
      setIsFavorite(isInFavorites);
    }
  }, [data]);

  const toggleFavorite = () => {
    if (!data) return;

    const updatedFavorites = [...favoriteRecipes];
    const isRecipeFavorite = updatedFavorites.some(
      (r) => r.idMeal === data.idMeal
    );

    if (isRecipeFavorite) {
      const filteredFavorites = updatedFavorites.filter(
        (r) => r.idMeal !== data.idMeal
      );
      setFavoriteRecipes(filteredFavorites);
      localStorage.setItem(
        "favoriteRecipes",
        JSON.stringify(filteredFavorites)
      );
      setIsFavorite(false);
    } else {
      updatedFavorites.push(data);
      setFavoriteRecipes(updatedFavorites);
      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  return { isFavorite, toggleFavorite };
};
