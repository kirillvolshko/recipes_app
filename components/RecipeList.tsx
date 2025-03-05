"use client";
import RecipeCard from "./RecipeCard";
import { IRecipeListResponse } from "@/types/recipe-list";
import Pagination from "./Pagination";
import { useState } from "react";

type RecipeListProps = {
  data: IRecipeListResponse | null;
};

const RecipeList = ({ data }: RecipeListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!data || !data.meals || data.meals.length === 0) {
    return <p>No recipes available.</p>;
  }

  const recipesPerPage = 10;
  const totalPages = Math.ceil(data.meals.length / recipesPerPage);

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = data.meals.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-center flex-wrap gap-5">
        {currentRecipes.map((meal) => (
          <RecipeCard key={meal.idMeal} data={meal} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default RecipeList;
