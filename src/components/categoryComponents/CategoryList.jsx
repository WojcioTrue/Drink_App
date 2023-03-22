import "../../styles/categories_list.css";
import "./CategoryListElement";
import CategoryListElement from "./CategoryListElement";
import DrinkInfo from "../coctailListComponents/DrinkInfo";
import NotFound from "../../sharedComponents/NotFound";
import CoctailList from "../coctailListComponents/CoctailList";
import FavListFullScreen from "../favouriteListComponents/FavListFullScreen";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import { arrayOfCategories } from "./CategoriesArray";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/ContextComponent";

const CategoryList = () => {
  const location = useLocation();
  const { getCategory } = useContext(MyContext);
  useEffect(() => {
      if(!location.state){
        getCategory('redirect')
      } else {
        getCategory(location.state.category);
      }
  }, [location, getCategory]);

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
        {arrayOfCategories.map( (element, id) => {
          return <Link key={id} to={`categories/${element.LinkTo}`} state={element.state}>
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
        <Route path="/drink/:id" element={<DrinkInfo />} />
        {/* categories */}
        <Route path="categories">
          <Route path=":id" element={<CoctailList/>}/>
        </Route>
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
