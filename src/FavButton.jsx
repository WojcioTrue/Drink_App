import "./styles/fav_button.css";
import { Link } from "react-router-dom";

const FavButton = () => {
  return (
    <Link to="/favourite_list">
      <div className="fav-button">
        <img alt="#" src={process.env.PUBLIC_URL + "/img/fav_icon.png"} />
      </div>
    </Link>
  );
};

export default FavButton;
