import "../../styles/categories_list.css";
import "./CategoryListElement";
import CategoryListElement from "./CategoryListElement";
import RouteComponent from "../../routes/RouteComponent";
import { Link } from "react-router-dom";
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
          {arrayOfCategories.map((element, id) => {
            return (
              <Link
                key={id}
                to={`categories/${element.LinkTo}`}
                state={element.state}
              >
                <CategoryListElement imgSrc={element.img} text={element.text} />
              </Link>
            );
          })}
        </ul>
      </motion.div>
      <RouteComponent />
    </>
  );
};

export default CategoryList;
