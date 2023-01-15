import "./styles/categories_list.css";

const CategoriesList = () => {
  function changeCategory(e) {
    console.log(e.currentTarget.getAttribute("value"));
  }

  return (
    <div className="categories-list">
      <h3>Select category:</h3>
      <ul>
        <li value="whisky" onClick={(e) => changeCategory(e)}>
          <img alt="#" src={"./img/category_icons/whiskey.png"} />
          <p>Whisky</p>
        </li>
        <li value="Burbon" onClick={(e) => changeCategory(e)}>
          <img alt="#" src="./img/category_icons/bourbon.png" />
          <p>Burbon</p>
        </li>
        <li value="Vodka" onClick={(e) => changeCategory(e)}>
          <img alt="#" src="./img/category_icons/vodka.png" />
          <p>Vodka</p>
        </li>
        <li value="Gin" onClick={(e) => changeCategory(e)}>
          <img alt="#" src="./img/category_icons/gin.png" />
          <p>Gin</p>
        </li>
        <li value="Tequila" onClick={(e) => changeCategory(e)}>
          <img alt="#" src="./img/category_icons/Tequila.png" />
          <p>Tequila</p>
        </li>
        <li value="Rum" onClick={(e) => changeCategory(e)}>
          <img alt="#" src="./img/category_icons/Rum.png" />
          <p>Rum</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesList;
