import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../recipiesService";

export const RecipeDetails = () => {
  const [recipie, setRecipie] = useState();
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getMealById(id).then((recipie) => setRecipie(recipie));
    }
  }, [id]);

  return (
    <>
      {recipie ? (
        <div>
          <h1>{recipie.strMeal}</h1>
          <img src={recipie.strMealThumb} alt={recipie.strMeal} />
          <p>{recipie.strInstructions}</p>
        </div>
      ) : (
        <div className='w-10 h-10 border-8 border-primary border-t rounded-full animate-spin'></div>
      )}
    </>
  );
};
