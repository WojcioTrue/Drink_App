import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { Outlet } from "react-router-dom";

const CoctailsOutlet = () => {
  return (
    <motion.div
      variants={mainView}
      custom={0.4}
      initial="hidden"
      animate="show"
      className="list-coctails"
    >
      <h3>List of coctails:</h3>
      <Outlet />
    </motion.div>
  );
};

export default CoctailsOutlet;
