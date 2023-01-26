const SearchBarListElement = ({name, img}) => {
  return (
    <li>
      <img alt="" src={img} />
      {name}
    </li>
  );
};

export default SearchBarListElement;
