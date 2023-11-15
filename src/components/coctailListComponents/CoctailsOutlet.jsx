import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "../../sharedComponents/NotFound";

const CoctailsOutlet = () => {
  const location = useLocation();

  return (
    <>
      <motion.div
        variants={mainView}
        custom={0.4}
        initial="hidden"
        animate="show"
        className="list-coctails"
      >
        <h3>List of coctails:</h3>
        {location.pathname === "/categories/" ? <NotFound /> : <Outlet />}
      </motion.div>
    </>
  );
};

export default CoctailsOutlet;
