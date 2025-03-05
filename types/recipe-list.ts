export interface IRecipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredients: string[];
  strMeasures: string[];
  strTags: string;
  strSource: string | null;
  strYoutube: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;

  [key: `strIngredient${number}`]: string | undefined;
  [key: `strMeasure${number}`]: string | undefined;
}

export interface IIngredient {
  ingredient: string;
  measure: string;
}

export interface IRecipeListResponse {
  meals: IRecipe[];
}
