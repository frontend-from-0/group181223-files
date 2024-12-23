import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isLoggedInUser = true;

  return isLoggedInUser ? children : <Navigate to="/user/login" replace={true} />;
}
