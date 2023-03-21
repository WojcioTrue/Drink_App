import "../../styles/categories_list.css";
import "./CategoryListElement";
import CategoryListElement from "./CategoryListElement";
import DrinkInfo from "../../DrinkInfo";
import NotFound from "../../NotFound";
import CoctailList from "../../CoctailList";
import FavListFullScreen from "../../FavListFullScreen";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { arrayOfCategories } from "./CategoriesArray";
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
        {arrayOfCategories.map( element => {
          return <Link to={element.LinkTo} state={element.state}>
            <CategoryListElement
              imgSrc={element.img}
              text={element.text}/>
          </Link>
        })}
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
