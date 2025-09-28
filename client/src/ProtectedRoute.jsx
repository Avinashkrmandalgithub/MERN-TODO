import { Navigate } from "react-router-dom";
import useAuthStore from "./store/useAuthStore.js";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthStore();

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!user) return <Navigate to="/signin" replace />;

  return children;
};

export default ProtectedRoute;
