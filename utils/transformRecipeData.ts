import { IRecipe } from "@/types/recipe-list";

export const transformRecipeData = (data: IRecipe) => {
  const ingredients: string[] = [];
  const measures: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(ingredient);
      measures.push(measure?.trim() || "");
    }
  }

  return {
    idMeal: data.idMeal,
    strMeal: data.strMeal,
    strCategory: data.strCategory,
    strArea: data.strArea,
    strInstructions: data.strInstructions,
    strMealThumb: data.strMealThumb,
    strIngredients: ingredients,
    strMeasures: measures,
    strTags: data.strTags || "",
    strSource: data.strSource || null,
    strYoutube: data.strYoutube || null,
    strImageSource: data.strImageSource || null,
    strCreativeCommonsConfirmed: data.strCreativeCommonsConfirmed || null,
    dateModified: data.dateModified || null,
  };
};
