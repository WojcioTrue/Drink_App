import "./styles/categories_list.css";
import "./CategoryListElement";
import CategoryListElement from "./CategoryListElement";
import DrinkInfo from "./DrinkInfo";
import NotFound from "./NotFound";
import CoctailList from "./CoctailList";
import FavListFullScreen from "./FavListFullScreen";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { mainView } from "./framerStyles/variants";

const CategoryList = () => {
  return (
    <>
      <motion.div
        variants={mainView}
        custom={0.3}
        initial="hidden"
        animate="show"
        className="categories-list"
      >
        <h3>Select category:</h3>
        <ul>
          <Link to="whiskey" state={{ category: "Whiskey" }}>
            <CategoryListElement
              imgSrc={
                process.env.PUBLIC_URL + "/img/category_icons/whiskey.png"
              }
              text={"Whiskey"}
            />
          </Link>
          <Link to="bourbon" state={{ category: "Bourbon" }}>
            <CategoryListElement
              imgSrc={
                process.env.PUBLIC_URL + "/img/category_icons/bourbon.png"
              }
              text={"Bourbon"}
            />
          </Link>
          <Link to="vodka" state={{ category: "Vodka" }}>
            <CategoryListElement
              imgSrc={process.env.PUBLIC_URL + "/img/category_icons/vodka.png"}
              text={"Vodka"}
            />
          </Link>
          <Link to="gin" state={{ category: "Gin" }}>
            <CategoryListElement
              imgSrc={process.env.PUBLIC_URL + "/img/category_icons/gin.png"}
              text={"Gin"}
            />
          </Link>
          <Link to="tequila" state={{ category: "Tequila" }}>
            <CategoryListElement
              imgSrc={
                process.env.PUBLIC_URL + "/img/category_icons/Tequila.png"
              }
              text={"Tequila"}
            />
          </Link>
          <Link to="rum" state={{ category: "Rum" }}>
            <CategoryListElement
              imgSrc={process.env.PUBLIC_URL + "/img/category_icons/Rum.png"}
              text={"Rum"}
            />
          </Link>
        </ul>
      </motion.div>

      <Routes>
        {/* home/index route */}
        <Route path="/" element={<CoctailList />} />
        {/* path for drink with id */}
        <Route path="/:id" element={<DrinkInfo />} />
        {/* categories */}
        <Route path="/whiskey" element={<CoctailList />} />
        <Route path="/bourbon" element={<CoctailList />} />
        <Route path="/vodka" element={<CoctailList />} />
        <Route path="/gin" element={<CoctailList />} />
        <Route path="/tequila" element={<CoctailList />} />
        <Route path="/rum" element={<CoctailList />} />
        {/* favourite list route */}
        <Route path="/favourite_list" element={<FavListFullScreen />} />
        {/* not found element */}
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
};

export default CategoryList;
