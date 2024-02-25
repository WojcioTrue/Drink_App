import "../../styles/search_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import SearchBarInput from "./SearchBarInput";

const Searchbar = () => {

  return (
    <motion.div
      variants={mainView}
      custom={0.2}
      initial="hidden"
      animate="show"
      className="search-bar"
    >
      <h2>
        <Link to="/">
          <FontAwesomeIcon
            icon={faMartiniGlassCitrus}
            className="search-bar__logo"
            title="logo"
          />
          FindMyDrink.
        </Link>
      </h2>
        <SearchBarInput/>
    </motion.div>
  );
};

export default Searchbar;
