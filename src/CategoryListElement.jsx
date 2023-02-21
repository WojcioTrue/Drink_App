import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/categories_list.css";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";

const CategoryListElement = ({ imgSrc , text}) => {
    const location = useLocation();
    const { getCategory } = useContext(MyContext);


    useEffect(() => {
      if(location.state !== null){
          getCategory(location.state.category);
          } else {
            console.log(false);
          }
    },[location]);

  return (
    <li value={text} >
          <img alt="#" src={imgSrc} />
          <p>{text}</p>
        </li>
  )
}

export default CategoryListElement