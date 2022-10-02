import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
};
