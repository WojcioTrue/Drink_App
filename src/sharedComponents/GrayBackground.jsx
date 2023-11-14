import "../styles/grayBackground.css";
import { useSelector } from "react-redux";

const GrayBackground = () => {
  const { display } = useSelector(
    (state) => state.ingredientsButtons
  );
  console.log(display)
  return <div className={"grayBackround " + (display ? "" : "disabled")}></div>;
};

export default GrayBackground;
