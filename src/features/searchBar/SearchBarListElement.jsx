import { Link } from "react-router-dom";

const SearchBarListElement = ({ name, img, id, setSearchDrink, noElement }) => {
  return (
    <>
      {noElement ? (
        <li onClick={() => setSearchDrink(name)}>
          <Link to={`/drink/${id}`}>
            <img alt="" src={img} />
            {name}
          </Link>
        </li>
      ) : (
        <li className={'no-element'}>
            <img alt="" src={img} />
            {name}
        </li>
      )}
    </>
  );
};

export default SearchBarListElement;
