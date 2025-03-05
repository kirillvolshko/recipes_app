import { useQuery } from "@tanstack/react-query";
import { fetchRecipesList } from "./recipesService";
import { recipeInformationService } from "./recipeInformationService";
import { recipeCategoryService } from "./caregoryService";

export const useRecipesList = (searchTerm: string | undefined) => {
  return useQuery({
    queryKey: ["recipesList", searchTerm],
    queryFn: fetchRecipesList,
  });
};
export const useRecipeInformation = (id: string | undefined) => {
  return useQuery({
    queryKey: ["recipe", id],
    queryFn: recipeInformationService,
  });
};
export const useCategory = () => {
  return useQuery({ queryKey: ["categories"], queryFn: recipeCategoryService });
};
