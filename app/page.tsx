"use client";

import { FilterForm } from "@/components/FilterForm";
import RecipeList from "@/components/RecipeList";
import { useRecipesList } from "@/store";
import { IRecipe } from "@/types/recipe-list";
import { useState, useEffect } from "react";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(
    undefined
  );

  const [filteredMeals, setFilteredMeals] = useState<IRecipe[]>([]);

  const { data, error, isLoading } = useRecipesList();

  useEffect(() => {
    if (data?.meals) {
      const filtered = categoryFilter
        ? data.meals.filter((meal) =>
            meal.strCategory?.includes(categoryFilter)
          )
        : data.meals;
      setFilteredMeals(filtered);
    }
  }, [categoryFilter, data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes</p>;

  const handleCategoryFilterChange = (newCategoryFilter: string) => {
    setCategoryFilter(newCategoryFilter);
  };

  return (
    <div>
      <FilterForm onCategoryFilterChange={handleCategoryFilterChange} />
      <RecipeList
        data={{
          meals: filteredMeals.length > 0 ? filteredMeals : data?.meals || [],
        }}
      />
    </div>
  );
}
