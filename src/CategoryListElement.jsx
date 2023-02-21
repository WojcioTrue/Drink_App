import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/categories_list.css";

const CategoryListElement = ({getCategory , imgSrc , text}) => {
    const location = useLocation();
    
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