import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.user);

  const role = user?.role;
  const isAuth = !!user.id;

  if (!isAuth) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(role))
    return <Navigate to="/login" />;
  return children;
};
