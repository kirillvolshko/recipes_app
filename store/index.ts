import { useQuery } from "@tanstack/react-query";
import { fetchRecipesList } from "./recipesService";
import { recipeInformationService } from "./recipeInformationService";
import { IRecipeListResponse } from "@/types/recipe-list";

export const useRecipesList = () => {
  return useQuery<IRecipeListResponse>({
    queryKey: ["recipesList"],
    queryFn: fetchRecipesList,
  });
};
export const useRecipeInformation = (id: string | undefined) => {
  return useQuery({
    queryKey: ["recipe", id],
    queryFn: recipeInformationService,
  });
};
