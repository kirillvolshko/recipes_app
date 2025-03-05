"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { IRecipe } from "@/types/recipe-list";
import RecipeCard from "@/components/RecipeCard";
import FavoriteRecipeCard from "@/components/FavoriteRecipeCard";
import IngredientsListFavorite from "@/components/IngredientsListFavorite";
import { getFavoriteRecipes } from "@/utils/favorites";
import { getAllIngredients } from "@/utils/ingredients";
import { Heart } from "lucide-react";
import { toggleFavorite } from "@/utils/favorites";

const FavoriteRecipesPage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    setFavoriteRecipes(getFavoriteRecipes());
  }, []);

  const allIngredients = getAllIngredients(favoriteRecipes);

  if (favoriteRecipes.length === 0) {
    return <p>No favorite recipes found</p>;
  }

  return (
    <div>
      <Link href={"/"}>
        <Button className="mb-5 hover:cursor-pointer">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="flex gap-5 max-h-[calc(100vh-150px)] overflow-y-auto">
        <div className="flex flex-col gap-5">
          {favoriteRecipes.map((item) => (
            <div key={item.idMeal} className="relative">
              <RecipeCard data={item} />
              <Button
                onClick={() =>
                  toggleFavorite(item, favoriteRecipes, setFavoriteRecipes)
                }
                className="absolute top-0 right-0"
              >
                <Heart className="fill-red-600 stroke-none" />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-full">
          {favoriteRecipes.map((item) => (
            <FavoriteRecipeCard key={item.idMeal} data={item} />
          ))}
        </div>
        <div className="flex flex-col gap-5 max-w-max min-w-max pr-10 rounded-[10px] bg-primary p-2.5 text-white">
          <IngredientsListFavorite ingredients={allIngredients} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteRecipesPage;
