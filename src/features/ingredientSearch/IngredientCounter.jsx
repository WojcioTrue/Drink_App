import { useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { useSelector } from "react-redux";

const IngredientCounter = () => {
  const { data, loading, error } = useSelector(
    (state) => state.ingredientsData
  );
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(data.drinkList.length);
  }, [data.drinkList.length]);

  return (
    <>
      <span className="ingredient__counter">
        <label>Number of drinks:</label>
        {error === null ? (
          <AnimatedNumbers
            transitions={() => ({
              type: "spring",
              duration: 0.2,
            })}
            animateToNumber={number}
          />
        ) : (
          <label>Some error occured...</label>
        )}
      </span>
    </>
  );
};

export default IngredientCounter;
