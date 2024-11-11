import { useEffect, useState } from "react";
import {listMealsByFirstLetter} from '../recipiesService';
import { Link } from "react-router-dom";

export const RecipeList = () => {
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
      listMealsByFirstLetter('b')
        .then((recipes) => setRecipies(recipes));
    }, []);

    return (
      <ul>
        {recipies.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipes/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    )
     
}