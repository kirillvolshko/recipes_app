import { transformRecipeData } from "@/utils/transformRecipeData ";
import { QueryFunctionContext } from "@tanstack/react-query";

export const recipeInformationService = async ({
  queryKey,
}: QueryFunctionContext<[string, string | undefined]>) => {
  const [, id] = queryKey;
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch meals");
  const json = await res.json();
  return transformRecipeData(json.meals[0]);
};
