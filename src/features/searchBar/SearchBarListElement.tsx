import { Link } from "react-router-dom";

type SearchBarListElementType = { 
  name: string;
  img: string; 
  id?: string;
  setSearchDrink?: (name: string) => void;
  noElement :boolean;
}

const SearchBarListElement = ({ name, img, id, setSearchDrink, noElement } :SearchBarListElementType ) => {
  return (
    <>
      {noElement ? (
        <li onClick={() => setSearchDrink?.(name)}>
          <Link to={`/drink/${id}`}>
            <img alt="" src={img} />
            {name}
          </Link>
        </li>
      ) : (
        <li className={'no-element'}>
          <img alt={name} src={img} />
          {name}
        </li>
      )}
    </>
  );
};

export default SearchBarListElement;
