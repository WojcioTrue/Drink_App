import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { Outlet, useLocation } from "react-router-dom";
import NotFound from "../../sharedComponents/NotFound";


const DrinksOutlet = () => {
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
          <h3>Drinks By ingredients:</h3>
          {location.pathname === "/ingredients/" ? <NotFound /> : <Outlet />}
        </motion.div>
      </>
    );
}

export default DrinksOutlet