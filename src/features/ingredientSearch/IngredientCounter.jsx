import AnimatedNumbers from "react-animated-numbers";
import { useSelector } from "react-redux";

const IngredientCounter = () => {
  const { data, error } = useSelector(
    (state) => state.ingredientsData
  );

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
            animateToNumber={data.drinkList.length}
          />
        ) : (
          <label>Some error occured...</label>
        )}
      </span>
    </>
  );
};

export default IngredientCounter;
