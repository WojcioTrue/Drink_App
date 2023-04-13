import "../../styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";
import { MyContext } from "../../context/ContextComponent";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import NotFound from "../../sharedComponents/NotFound";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "../../features/categoryList/categoryListSlice";
import LoadingScreen from "../../sharedComponents/LoadingScreen";

const CoctailList = () => {
  // const { drinkData, setCategoryId } = useContext(MyContext);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categoryList);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDrinks(id));
  }, [dispatch,id]);
  
  let content;

  if (loading === "pending") {
    console.log("Loading pending", loading)
    content = <LoadingScreen />;
  }
  if (loading === "idle") {
    console.log("Loading idle")
    console.log("data", data)
    content = (
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
    );
  }
  if(error !== null){
    content = (<NotFound/>)
  }

  return (
    <motion.div
      variants={mainView}
      custom={0.4}
      initial="hidden"
      animate="show"
      className="list-coctails"
    >
      {content}
    </motion.div>
  );
};

export default CoctailList;

/* // useEffect(() => {
  //   console.log(drinksData);
  //   setCategoryId(id);
  //   dispatch(getDrinks(id));
  // }, [id, setCategoryId, dispatch]) */
/* {drinkData
          ? 
          <>
          <h3>List of coctails:</h3>
          <div className="grid-coctails">
            {drinkData.drinks.map((element) => (
              <CoctailElement
                key={element.idDrink}
                id={element.idDrink}
                name={element.strDrink}
                imgSrc={element.strDrinkThumb}
              />    
            ))}
            </div>
            </>
          : <NotFound/>} */
