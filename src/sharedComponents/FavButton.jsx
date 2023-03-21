import "./styles/fav_button.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mainView } from "../framerStyles/variants";

const FavButton = () => {
  return (
    <Link to="/favourite_list">
      <motion.div
        variants={mainView}
        custom={0.6}
        initial="hidden"
        animate="show"
        className="fav-button"
      >
        <img alt="#" src={process.env.PUBLIC_URL + "/img/fav_icon.png"} />
      </motion.div>
    </Link>
  );
};

export default FavButton;
