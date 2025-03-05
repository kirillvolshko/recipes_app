"use client";

import { useRecipeInformation } from "@/store";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, MapPinned, Heart } from "lucide-react";
import IngredientsList from "@/components/IngredientList";
import IngredientWithMeasure from "@/components/IngredientWithMeasure";
import RecipeVideo from "@/components/RecipeVideo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { IRecipe } from "@/types/recipe-list";
import { toggleFavoriteRecipe } from "@/utils/favorites";

const RecipeInformation = () => {
  const { id } = useParams();
  const recipeId = Array.isArray(id) ? id[0] : id;
  const { data, error, isLoading } = useRecipeInformation(recipeId ?? "");

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteRecipes: IRecipe[] = JSON.parse(
      localStorage.getItem("favoriteRecipes") || "[]"
    );
    const isInFavorites = favoriteRecipes.some(
      (recipe) => recipe.idMeal === data?.idMeal
    );
    setIsFavorite(isInFavorites);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipe</p>;

  if (!data) return <p>No recipe found</p>;

  return (
    <div>
      <Link href={"/"}>
        <Button className="mb-5 hover:cursor-pointer">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <Image
                src={data.strMealThumb}
                alt={data.strMeal}
                width={300}
                height={300}
                className="rounded-[10px]"
              />
              <div className="relative flex gap-5 rounded-[10px] bg-primary p-2.5 text-white w-full">
                <div className="flex flex-col gap-5">
                  <p>{data.strMeal}</p>

                  <div className="flex gap-5">
                    <p className="text-center">Category: {data.strCategory}</p>
                    <div className="flex gap-1 items-center">
                      <MapPinned />
                      <p className="text-center">{data.strArea}</p>
                    </div>
                  </div>
                </div>
                <IngredientsList recipe={data} />
                <Button
                  onClick={() =>
                    toggleFavoriteRecipe(data, isFavorite, setIsFavorite)
                  }
                  className="absolute top-0 right-4"
                >
                  <Heart
                    fill={isFavorite ? "red" : "none"}
                    stroke={isFavorite ? "red" : "white"}
                  />
                </Button>
              </div>
            </div>

            <div className="flex gap-5 rounded-[10px] bg-primary p-2.5 text-white">
              <IngredientWithMeasure recipe={data} />
              <p>{data.strInstructions}</p>
            </div>
          </div>
        </div>
        <div>
          <RecipeVideo youtubeUrl={data.strYoutube} />
        </div>
      </div>
    </div>
  );
};

export default RecipeInformation;
