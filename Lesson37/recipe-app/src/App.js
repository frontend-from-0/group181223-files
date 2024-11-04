import "./App.css";
import { useEffect, useState } from "react";
import {listMealsByFirstLetter} from './modules/recipies/recipiesService';

function App() {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    listMealsByFirstLetter('b')
      .then((recipes) => setRecipies(recipes));
  }, []);


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
