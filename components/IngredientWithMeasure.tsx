import { IRecipe } from "@/types/recipe-list";

const IngredientWithMeasure = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div className="min-w-max">
      <h2 className="text-lg font-bold">Ingredients & Measurements:</h2>
      <ul className="">
        {recipe.strIngredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient} - {recipe.strMeasures[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientWithMeasure;
