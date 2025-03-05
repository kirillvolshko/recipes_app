import { IRecipe } from "@/types/recipe-list";

const IngredientsList = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div>
      <h2 className=" font-bold">Ingredients:</h2>
      <ul>
        {recipe.strIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
