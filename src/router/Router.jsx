import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { AuthRoutes } from "../publicSite/auth";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { Home } from "../publicSite/home/pages";
import { DashboardRoutes } from "../privateSite";

export const Router = () => {
  const { checkToken, status } = useAuth();

  useEffect(() => {
    checkToken();
  }, []);

  if (status === "checking") return <h1>Cargando</h1>;

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />

      <Route
        path="/app/*"
        element={
          status === "authenticated" ? (
            <DashboardRoutes />
          ) : (
            <Navigate to="/auth" />
          )
        }
      />

      <Route
        path="/auth/*"
        element={
          status === "not-authenticated" ? (
            <AuthRoutes />
          ) : (
            <Navigate to="/app" />
          )
        }
      />
      <Route path="/*" element={<h1>Error 404 not found</h1>} />
    </Routes>
  );
};
