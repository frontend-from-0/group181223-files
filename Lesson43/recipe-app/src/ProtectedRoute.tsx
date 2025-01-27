import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedInUser = true;

  return isLoggedInUser ? <>{children}</> : <Navigate to="/user/login" replace={true} />;
}
