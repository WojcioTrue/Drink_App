import "./styles/search_bar.css"

const Searchbar = () => {
  return (
    <div className="search-bar">
      <h2>
        <i className="fa-solid fa-martini-glass-citrus search-bar__logo"> </i>
        FindMyDrink.
      </h2>
      <span className="search-bar__input">
        <input
          type="text"
          // value=""
          id="SearchDrink"
          name="SearchDrink"
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass icon"></i>
      </span>
    </div>
  );
};

export default Searchbar;
