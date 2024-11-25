import { Routes, Route } from "react-router-dom";
import { RecipeList } from "./modules/recipes/RecipeList";
import { SearchBar } from "./modules/recipes/SearchBar";
import { RecipeDetails } from "./modules/recipes/RecipeDetails";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginForm } from "./modules/user/login";
import { NewRecipeForm } from "./modules/recipes/NewRecipeForm";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/recipes">
        <Route path="search" element={<SearchBar />} />
        <Route
          path="new"
          element={
            <ProtectedRoute>
              <NewRecipeForm />
            </ProtectedRoute>
          }
        />
        <Route path=":id" element={<RecipeDetails />} />
        <Route index element={<RecipeList />} />
      </Route>
      <Route path="/user">
        <Route path="login" element={<LoginForm />} />
        <Route path="logout" element={<p> Placeholder for logout page</p>} />
        <Route path="register" element={<p>Registration Form</p>} />
      </Route>
      

      <Route path="/" element={<RecipeList />} />
    </Routes>
  );
};
