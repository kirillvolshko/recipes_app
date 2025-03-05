const IngredientsListFavorite = ({
  ingredients,
}: {
  ingredients: { ingredient: string; measure: string }[];
}) => {
  return (
    <div>
      <h2 className="font-bold">Ingredients:</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsListFavorite;
