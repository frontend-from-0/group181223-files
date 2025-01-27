import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../recipiesService";
import { Recipe } from "../models/recipe";
import { useSelector, useDispatch } from "react-redux";
import { updateRecipes } from "../recipeSlice";

export const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  let { id } = useParams();
  const recipes = useSelector(
    (state: { recipes: { value: Recipe[] } }) => state.recipes.value,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const recipeFromStore = recipes.find((recipe) => recipe.idMeal === id);
      if (!recipeFromStore || !recipeFromStore.strInstructions) {
        getMealById(id).then((recipie) => {
          setRecipe(recipie);
          dispatch(updateRecipes([recipie]));
        });
      } else {
        setRecipe(recipeFromStore);
      }
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
        <div className="w-10 h-10 border-8 border-primary border-t rounded-full animate-spin"></div>
      )}
    </>
  );
};
