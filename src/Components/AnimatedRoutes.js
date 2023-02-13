import { Routes, Route, useLocation } from "react-router-dom";
import { Homes } from "../Pages/Home";
import { Abouts } from "../Pages/About";
import { Projects } from "../Pages/Porfolio";

export const Animation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/home" element={<Homes />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/portfolio" element={<Projects />} />
    </Routes>
  );
};
