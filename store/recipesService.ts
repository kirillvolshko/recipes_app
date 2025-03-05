import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchRecipesList = async ({
  queryKey,
}: QueryFunctionContext<[string, string | undefined]>) => {
  const [, searchTerm] = queryKey;
  let url = "https://www.themealdb.com/api/json/v1/1/";

  if (searchTerm) {
    url += `search.php?s=${searchTerm}`;
  } else {
    const meals = [];
    for (let letter = 65; letter <= 90; letter++) {
      const currentLetter = String.fromCharCode(letter);
      const res = await fetch(url + `search.php?f=${currentLetter}`);
      const data = await res.json();
      meals.push(...(data.meals || []));
    }
    return { meals };
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch meals");
  return res.json();
};
