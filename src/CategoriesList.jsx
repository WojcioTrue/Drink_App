import "./styles/categories_list.css";

const CategoriesList = () => {
  return (
    <div className="categories-list">
      <h3>Select category:</h3>
      <ul>
        <li>
          <img alt="#" src={"./img/category_icons/whiskey.png"} />
          <p>Whisky</p>
        </li>
        <li>
          <img alt="#" src="./img/category_icons/bourbon.png" />
          <p>Burbon</p>
        </li>
        <li>
          <img alt="#" src="./img/category_icons/vodka.png" />
          <p>Vodka</p>
        </li>
        <li>
          <img alt="#" src="./img/category_icons/gin.png" />
          <p>Gin</p>
        </li>
        <li>
          <img alt="#" src="./img/category_icons/Tequila.png" />
          <p>Tequila</p>
        </li>
        <li>
          <img alt="#" src="./img/category_icons/Rum.png" />
          <p>Rum</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesList;
