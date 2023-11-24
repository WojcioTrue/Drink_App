import { useEffect } from "react";
import { useSelector } from "react-redux";

const IngredientCounter = () => {
  const { data, loading, error } = useSelector(
    (state) => state.ingredientsData
  );

  useEffect(() => {
    console.log(data);
  }, [data]);
  
  return (
    <>
      <h3>ingredinets:</h3>
      <h3>Found 5 drinks</h3>
    </>
  );
};

export default IngredientCounter;
