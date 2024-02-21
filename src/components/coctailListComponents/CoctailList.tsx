import "../../styles/coctail_list.css";
import CoctailElement from "./CoctailListElement";
import { useEffect } from "react";
import NotFound from "../../sharedComponents/NotFound";
import { useParams } from "react-router-dom";
import { getDrinks } from "../../features/categoryList/categoryListSlice";
import CoctailListSkeleton from "./CoctailListSkeleton";
import { useAppDispatch, useAppSelector } from "../../app/storeHooks";

type CoctailElementProps = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string,
  useLayout?: boolean
}

const CoctailList = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.categoryList);
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
            {data.map(({idDrink, strDrink, strDrinkThumb}:CoctailElementProps) => (
              <CoctailElement
                key={idDrink}
                id={idDrink}
                name={strDrink}
                imgSrc={strDrinkThumb}
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
