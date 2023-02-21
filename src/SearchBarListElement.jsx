import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";


const SearchBarListElement = ({ name, img, id }) => {

  return (
      
      <li>
        <Link to={`${id}`}>
        <img alt="" src={img} />
        {name}
        </Link>
      </li>
      
  );
};

export default SearchBarListElement;
