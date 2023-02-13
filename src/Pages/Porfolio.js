import { motion } from "framer-motion";
export const Projects = () => {
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
