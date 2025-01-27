import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../recipiesService";
import { Recipe } from "../models/recipe";

export const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getMealById(id).then((recipie) => setRecipe(recipie));
    }
  }, [id]);

  return (
    <>
      {recipe ? (
        <div>
          <h1>{recipe.strMeal}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strInstructions}</p>
        </div>
      ) : (
        <div className='w-10 h-10 border-8 border-primary border-t rounded-full animate-spin'></div>
      )}
    </>
  );
};
