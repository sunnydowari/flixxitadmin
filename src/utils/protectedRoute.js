import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext/AuthContext";
import { useContext } from "react";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoute;
