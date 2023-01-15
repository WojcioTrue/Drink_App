import "./styles/categories_list.css";

const CategoriesList = ({getCategory}) => {

  function changeCategory(e) {
    getCategory(e.currentTarget.getAttribute("value"));
  }


  return (
    <div className="categories-list">
      <h3>Select category:</h3>
      <ul>
        <li value="whisky" onClick={changeCategory}>
          <img alt="#" src={"./img/category_icons/whiskey.png"} />
          <p>Whisky</p>
        </li>
        <li value="Burbon" onClick={changeCategory}>
          <img alt="#" src="./img/category_icons/bourbon.png" />
          <p>Burbon</p>
        </li>
        <li value="Vodka" onClick={changeCategory}>
          <img alt="#" src="./img/category_icons/vodka.png" />
          <p>Vodka</p>
        </li>
        <li value="Gin" onClick={changeCategory}>
          <img alt="#" src="./img/category_icons/gin.png" />
          <p>Gin</p>
        </li>
        <li value="Tequila" onClick={changeCategory}>
          <img alt="#" src="./img/category_icons/Tequila.png" />
          <p>Tequila</p>
        </li>
        <li value="Rum" onClick={changeCategory}>
          <img alt="#" src="./img/category_icons/Rum.png" />
          <p>Rum</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesList;
