import Link from "next/link";
import Image from "next/image";
import { Recipe } from "./types/recipe";

export default async function Home() {
  const recipesResponse = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=f",
  );
  if (!recipesResponse.ok) {
    throw new Error("Failed to fetch data from the server");
  }

  const recipeData = await recipesResponse.json();

  return (
    recipeData && (
      <>
        <h1>Recipe App</h1>
        <ul className="flex flex-wrap gap-8">
          {recipeData.meals.map((recipe: Recipe) => (
            <li
              className="p-4 border rounded-md shadow-md inline-block max-w-80 flex flex-col justify-between"
              key={recipe.idMeal}
            >
              <div>
                <Image
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  width={300}
                  height={150}
                  className="mb-4"
                />
                <Link href={`/recipes/${recipe.idMeal}`}>
                  <h2 className="text-lg text-gray-800 truncate text-ellipsis overflow-hidden hover:underline">
                    {recipe.strMeal}
                  </h2>
                </Link>
              </div>

              <div className="mt-4">
                <span className="text-xs uppercase bg-gray-400 text-gray-100 text-sm py-2 px-4 rounded-full">
                  {recipe.strCategory}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  );
}
