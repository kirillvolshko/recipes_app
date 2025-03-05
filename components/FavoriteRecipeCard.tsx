import { IRecipe } from "@/types/recipe-list";

const FavoriteRecipeCard = ({ data }: { data: IRecipe }) => {
  return (
    <div className="rounded-[10px] bg-primary p-2.5 text-white">
      <h2>{data.strMeal}</h2>
      <p>{data.strInstructions}</p>
    </div>
  );
};

export default FavoriteRecipeCard;
