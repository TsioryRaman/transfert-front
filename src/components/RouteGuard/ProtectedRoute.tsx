import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useLogged } from "../hooks/useLogged";

interface PrivateRouteProps {}

const ProtectedRoute: React.FC<PrivateRouteProps> = () => {
  const logged = useLogged();

  return logged ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
