import "../../styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";
import { useEffect } from "react";
import NotFound from "../../sharedComponents/NotFound";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks } from "../../features/categoryList/categoryListSlice";
import CoctailListSkeleton from "./CoctailListSkeleton";

const CoctailList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categoryList);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDrinks(id));
  }, [dispatch, id]);

  return (
    <>
      {loading === "pending" && <CoctailListSkeleton/>}
      {loading === "idle" && error == null && (
        <>
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
    </>
  );
};

export default CoctailList;
