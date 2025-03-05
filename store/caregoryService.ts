import { QueryFunctionContext } from "@tanstack/react-query";

export const recipeCategoryService = async ({
  queryKey,
}: QueryFunctionContext<[string]>) => {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};
