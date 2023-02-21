import { Link } from "react-router-dom";

const SearchBarListElement = ({ name, img, id, setSearchDrink }) => {

  return (
      
      <li onClick={() => setSearchDrink(name)}>
        <Link to={`${id}`}>
        <img alt="" src={img} />
        {name}
        </Link>
      </li>
      
  );
};

export default SearchBarListElement;
