import AnimatedNumbers from "react-animated-numbers";
import { useSelector } from "react-redux";

const IngredientCounter = () => {
  const { data, error } = useSelector((state) => state.ingredientsData);

  return (
    <>
      <span className="ingredient__counter">
        <label aria-label="LabelDrinksNumber">Number of drinks:</label>
        {error === null ? (
          <label>
            <AnimatedNumbers
            transitions={() => ({
              type: "spring",
              duration: 0.15,
            })}
            animateToNumber={data.drinkList.length}
          />
            </label>
        ) : (
          <label>Some error occured...</label>
        )}
      </span>
    </>
  );
};

export default IngredientCounter;
