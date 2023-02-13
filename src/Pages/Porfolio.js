import axios from "axios";
import { motion } from "framer-motion";
import { useEffect } from "react";
export const Projects = () => {
  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => console.log(res.data.fact));
  }, []);

  return (
    <div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        <div style={{ textAlign: "center" }}>This is my portfolio</div>;
      </motion.div>
      ;
    </div>
  );
};
