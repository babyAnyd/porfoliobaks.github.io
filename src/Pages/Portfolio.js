import { motion } from "framer-motion";
import { ProjectsDone } from "../Components/Projects";
export const Projects = () => {
  return (
    <div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 1 } }}
      >
        <ProjectsDone />
      </motion.div>
      ;
    </div>
  );
};
