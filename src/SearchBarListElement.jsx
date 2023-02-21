import { Link } from "react-router-dom";

const SearchBarListElement = ({ name, img, id, setSearchDrink, noElement }) => {
  return (
    <>
      {noElement ? (
        <li onClick={() => setSearchDrink(name)}>
          <Link to={`${id}`}>
            <img alt="" src={img} />
            {name}
          </Link>
        </li>
      ) : (
        <li>
          <Link to={`${id}`}>
            <img alt="" src={img} />
            {name}
          </Link>
        </li>
      )}
    </>
  );
};

export default SearchBarListElement;
