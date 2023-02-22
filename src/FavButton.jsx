import "./styles/fav_button.css";
import { Link } from "react-router-dom";

const FavButton = () => {
  return (
    <Link to="/">
      <div className="fav-button">
        <img alt="#" src="./img/fav_icon.png" />
      </div>
    </Link>
  );
};

export default FavButton;
