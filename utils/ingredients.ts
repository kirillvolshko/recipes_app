import { IRecipe } from "@/types/recipe-list";

export const getAllIngredients = (recipes: IRecipe[]) => {
  return recipes.flatMap((recipe) =>
    recipe.strIngredients.map((ingredient, index) => ({
      ingredient,
      measure: recipe.strMeasures[index] || "",
    }))
  );
};
