const Searchbar = () => {
  return (
    <div class="search-bar">
      <h2>
        <i class="fa-solid fa-martini-glass-citrus search-bar__logo"> </i>
        FindMyDrink.
      </h2>
      <span class="search-bar__input">
        <input
          type="text"
          value=""
          id="SearchDrink"
          name="SearchDrink"
          placeholder="Search"
        />
        <i class="fa-solid fa-magnifying-glass icon"></i>
      </span>
    </div>
  );
};

export default Searchbar;
