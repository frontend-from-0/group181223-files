import "./App.css";
import { useEffect, useState } from "react";
import {listMealsByFirstLetter} from './modules/recipies/recipiesService';

function App() {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    listMealsByFirstLetter('b')
      .then((recipes) => setRecipies(recipes));
  }, []);


  // Example of how to use async/await syntax inside useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=");
  //     const data = await response.json();
  //     setRecipies(data.meals);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <ul>
        {recipies.map((recipe) => (
          <li key={recipe.idMeal}>
            {recipe.strMeal}
          </li>
        ))}
      </ul>
     </div>
  );
}

export default App;
