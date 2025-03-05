import { IRecipe } from "@/types/recipe-list";
import { MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  data: IRecipe;
};

const RecipeCard = ({ data }: RecipeCardProps) => {
  return (
    <Link href={`/recipes/${data.idMeal}`}>
      <div className="flex flex-col text-white hover:cursor-pointer hover:outline hover:outline-blue-700 rounded-[10px]">
        <Image
          src={data.strMealThumb}
          alt={data.strMeal}
          width={270}
          height={200}
          className="rounded-t-[10px]"
        />
        <div className="flex flex-col gap-5 rounded-b-[10px] bg-primary p-2.5 ">
          <p className="text-center">{data.strMeal}</p>
          <div className=" flex gap-5 justify-center">
            <p className="text-center">Category: {data.strCategory}</p>
            <div className="flex gap-1 items-center">
              <MapPinned />
              <p className="text-center">{data.strArea}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RecipeCard;
