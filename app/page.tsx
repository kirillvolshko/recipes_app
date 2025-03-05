"use client";

import { FilterForm } from "@/components/FilterForm";
import RecipeList from "@/components/RecipeList";
import { Button } from "@/components/ui/button";
import { useRecipesList } from "@/store";
import { IRecipe } from "@/types/recipe-list";
import Link from "next/link";
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
    <div className="relative">
      <div className="flex justify-between">
        <FilterForm onCategoryFilterChange={handleCategoryFilterChange} />
        <Link href={"/favorite"}>
          <Button className="hover:cursor-pointer">Favorite recipe</Button>
        </Link>
      </div>

      <RecipeList
        data={{
          meals: filteredMeals.length > 0 ? filteredMeals : data?.meals || [],
        }}
      />
    </div>
  );
}
