import "../../styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";
import { MyContext } from "../../context/ContextComponent";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { mainView } from "../../framerStyles/variants";
import LoadingScreen from '../../sharedComponents/LoadingScreen'
import { useParams } from "react-router-dom";
const CoctailList = () => {
  const { drinkData, setCategoryId } = useContext(MyContext);
  const { id } = useParams();


  useEffect(() => {
    console.log(id);
    setCategoryId(id);
  }, [id, setCategoryId])
  return (
    <motion.div
    variants={mainView}
    custom={0.4}
    initial="hidden"
    animate="show" 
    className="list-coctails">
      <h3>List of coctails:</h3>
      
        {drinkData
          ? 
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
          : <LoadingScreen/>}
      
    </motion.div>
  );
};

export default CoctailList;
