"use client";

import { FilterForm } from "@/components/FilterForm";
import RecipeList from "@/components/RecipeList";
import { useRecipesList } from "@/store";
import { useState, useEffect } from "react";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(
    undefined
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMeals, setFilteredMeals] = useState<any[]>([]);

  const { data, error, isLoading } = useRecipesList(searchTerm);

  useEffect(() => {
    if (data?.meals) {
      // Фильтрация только если categoryFilter имеет данные
      const filtered = categoryFilter
        ? data.meals.filter((meal) =>
            meal.strCategory?.includes(categoryFilter)
          )
        : data.meals; // Если фильтр пустой, показываем все рецепты

      setFilteredMeals(filtered);
    }
  }, [categoryFilter, data]); // Перезапускать эффект при изменении categoryFilter или data

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
