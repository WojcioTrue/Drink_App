import Message from "./Message";
import Button from "./sharedComponents/Button";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <Message
        header={"Something went wrong!"}
        text={"I don't see the page you looking for, or some error occured..."}
        secondText={"Return to home page."}
        img={process.env.PUBLIC_URL + "/img/fav_icon.png"}
      />
      <Link to="/">
        <Button>{"Return home"}</Button>
      </Link>
    </>
  );
};

export default NotFound;
