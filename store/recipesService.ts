import { IRecipe, IRecipeListResponse } from "@/types/recipe-list";

export const fetchRecipesList = async (): Promise<IRecipeListResponse> => {
  const meals: IRecipe[] = [];

  for (let letter = 65; letter <= 90; letter++) {
    const currentLetter = String.fromCharCode(letter);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${currentLetter}`
    );

    if (!res.ok)
      throw new Error(`Failed to fetch meals for letter ${currentLetter}`);

    const data = await res.json();
    meals.push(...(data.meals || []));
  }

  return { meals };
};
