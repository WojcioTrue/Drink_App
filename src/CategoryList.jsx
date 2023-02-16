import "./styles/categories_list.css";
import "./CategoryListElement";
import CategoryListElement from "./CategoryListElement";
import CoctailList from "./CoctailList";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import { Routes, Route, Link } from "react-router-dom";

const CategoryList = () => {
  const { getCategory } = useContext(MyContext);

  return (
    <>
      <div className="categories-list">
        <h3>Select category:</h3>
        <ul>
          <Link to="Whiskey">
          <CategoryListElement
            value={"Whiskey"}
            imgSrc={"./img/category_icons/whiskey.png"}
            text={"Whiskey"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="Bourbon">
          <CategoryListElement
            value={"Bourbon"}
            imgSrc={"./img/category_icons/bourbon.png"}
            text={"Burbon"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="Vodka">
          <CategoryListElement
            value={"Vodka"}
            imgSrc={"./img/category_icons/vodka.png"}
            text={"Vodka"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="Gin">
          <CategoryListElement
            value={"Gin"}
            imgSrc={"./img/category_icons/gin.png"}
            text={"Gin"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="Tequila">
          <CategoryListElement
            value={"Tequila"}
            imgSrc={"./img/category_icons/Tequila.png"}
            text={"Tequila"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="Rum">
            <CategoryListElement
              value={"Rum"}
              imgSrc={"./img/category_icons/Rum.png"}
              text={"Rum"}
              getCategory={getCategory}
            />
          </Link>
        </ul>
      </div>
      <CoctailList />
      <Routes>
        <Route path="/Whiskey" element={<CoctailList />} />
        <Route path="/Bourbon" element={<CoctailList />} />
        <Route path="/Vodka" element={<CoctailList />} />
        <Route path="/Gin" element={<CoctailList />} />
        <Route path="/Tequila" element={<CoctailList />} />
        <Route path="/Rum" element={<CoctailList />} />
      </Routes>
    </>
  );
};

export default CategoryList;
