import { Routes, Route } from "react-router-dom";
import { Homes } from "../Pages/Home";
import { About } from "../Pages/About";
import { Projects } from "../Pages/Portfolio";

export const Animation = () => {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Projects />} />
    </Routes>
  );
};
