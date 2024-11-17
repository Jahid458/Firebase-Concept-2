import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContex } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContex);
  console.log("private route user", user);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={{from:location.pathname}}  to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
