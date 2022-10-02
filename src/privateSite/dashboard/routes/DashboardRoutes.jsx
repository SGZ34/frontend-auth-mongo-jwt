import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/*" element={<Navigate to="/app" />} />
    </Routes>
  );
};
