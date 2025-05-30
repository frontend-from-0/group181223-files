import { Routes, Route } from 'react-router-dom';
import { RecipeList } from './modules/recipies/RecipeList';
import {SearchBar} from './modules/recipies/SearchBar';
import { RecipeDetails } from './modules/recipies/RecipeDetails';
import { ProtectedRoute } from './ProtectedRoute';


export const AppRouter = () => {
    return (
      <Routes>
        <Route path="/recipes" >
          <Route path="search" element={<SearchBar />} />
          <Route path="new" element={<ProtectedRoute><p>Create new recipe page placholder</p></ProtectedRoute>} />
          <Route path=":id" element={<RecipeDetails />} />
          <Route index element={<RecipeList />} />
        </Route>


        <Route path="/" element={<RecipeList />} />
      </Routes>

    )
};