import Link from "next/link";
import { ListItem } from "./_components/ListItem";

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
          {recipeData.meals.map((recipe) => (
            <li key={recipe.idMeal}>
              <Link href={`/recipes/${recipe.idMeal}`}>
                <ListItem recipe={recipe} />
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
}
