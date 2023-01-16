import "./styles/categories_list.css";
import "./CategoryListElement";
import CategoryListElement from "./CategoryListElement";

const CategoryList = ({ getCategory }) => {

  return (
    <div className="categories-list">
      <h3>Select category:</h3>
      <ul>
        <CategoryListElement
          value={"Whiskey"}
          imgSrc={"./img/category_icons/whiskey.png"}
          text={"Whiskey"}
          getCategory={getCategory}
        />
        <CategoryListElement
          value={"Bourbon"}
          imgSrc={"./img/category_icons/bourbon.png"}
          text={"Burbon"}
          getCategory={getCategory}
        />

        <CategoryListElement
          value={"Vodka"}
          imgSrc={"./img/category_icons/vodka.png"}
          text={"Vodka"}
          getCategory={getCategory}
        />

        <CategoryListElement
          value={"Gin"}
          imgSrc={"./img/category_icons/gin.png"}
          text={"Gin"}
          getCategory={getCategory}
        />

        <CategoryListElement
          value={"Tequila"}
          imgSrc={"./img/category_icons/Tequila.png"}
          text={"Tequila"}
          getCategory={getCategory}
        />

        <CategoryListElement
          value={"Rum"}
          imgSrc={"./img/category_icons/Rum.png"}
          text={"Rum"}
          getCategory={getCategory}
        />
      </ul>
    </div>
  );
};

export default CategoryList;
