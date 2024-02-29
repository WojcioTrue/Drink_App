import Message from "./Message";
import Button from "./Button";
import { Link } from "react-router-dom";
import '../styles/not_found.css'
import { coctailButton } from '../framerStyles/variants'
import { noFavouriteDrinks } from '../framerStyles/variants'

const NotFound = () => {
  return (
    <div className="not-found">
      <Message
        animationVariant={noFavouriteDrinks}
        header={"Something went wrong!"}
        text={"I don't see the page you looking for, or some error occured..."}
        secondText={"Return to home page."}
        img={process.env.PUBLIC_URL + "/img/broken_glass.png"}
        imgAltText={"Alt img for error prompt"}
      />
      <Link to="/">
        <Button animationVariant={coctailButton} variant="not-found__button">{"Return home"}</Button>
      </Link>
    </div>
  );
};

export default NotFound;
