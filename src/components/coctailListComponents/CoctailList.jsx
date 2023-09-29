import "../../styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import NotFound from "../../sharedComponents/NotFound";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "../../features/categoryList/categoryListSlice";
import LoadingScreen from "../../sharedComponents/LoadingScreen";

const CoctailList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categoryList);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDrinks(id));
  }, [dispatch, id]);

  return (
    <motion.div
      variants={mainView}
      custom={0.4}
      initial="hidden"
      animate="show"
      className="list-coctails"
    >
      {loading === "pending" && <LoadingScreen />}
      {(loading === "idle" && error == null) && (
        <>
          <h3>List of coctails:</h3>
          <div className="grid-coctails">
            {data.map((element) => (
              <CoctailElement
                key={element.idDrink}
                id={element.idDrink}
                name={element.strDrink}
                imgSrc={element.strDrinkThumb}
              />
            ))}
          </div>
        </>
      )}
      {error && <NotFound />}
    </motion.div>
  );
};

export default CoctailList;
