import "./styles/categories_list.css";
import "./CategoryListElement";
import CategoryListElement from "./CategoryListElement";
import NotFound from "./NotFound";
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
          <Link to="whiskey" state={{category : "Whiskey"}}>
          <CategoryListElement
            imgSrc={"./img/category_icons/whiskey.png"}
            text={"Whiskey"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="bourbon" state={{category : "Bourbon"}}>
          <CategoryListElement
            imgSrc={"./img/category_icons/bourbon.png"}
            text={"Bourbon"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="vodka" state={{category : "Vodka"}}>
          <CategoryListElement
            imgSrc={"./img/category_icons/vodka.png"}
            text={"Vodka"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="gin" state={{category : "Gin"}}>
          <CategoryListElement
            imgSrc={"./img/category_icons/gin.png"}
            text={"Gin"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="tequila" state={{category : "Tequila"}}>
          <CategoryListElement
            imgSrc={"./img/category_icons/Tequila.png"}
            text={"Tequila"}
            getCategory={getCategory}
          />
          </Link>
          <Link to="rum" state={{category : "Rum"}}>
            <CategoryListElement
              imgSrc={"./img/category_icons/Rum.png"}
              text={"Rum"}
              getCategory={getCategory}
            />
          </Link>
        </ul>
      </div>
      
      <Routes>
        <Route path="/" element={<CoctailList />} />
        <Route path="/whiskey" element={<CoctailList />}/>
        <Route path="/:id" element={<NotFound />}/>
        <Route path="/bourbon" element={<CoctailList />} />
        <Route path="/vodka" element={<CoctailList />} />
        <Route path="/gin" element={<CoctailList />} />
        <Route path="/tequila" element={<CoctailList />} />
        <Route path="/rum" element={<CoctailList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default CategoryList;
