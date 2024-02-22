import AnimatedNumbers from "react-animated-numbers";
import { useAppSelector } from "../../app/storeHooks";

const IngredientCounter = () => {
  const { data, error } = useAppSelector((state) => state.ingredientsData);

  return (
    <>
      <span className="ingredient__counter">
        <label aria-label="LabelDrinksNumber">Number of drinks:</label>
        {error === null ? (
          <label>
            <AnimatedNumbers
              transitions={() => ({
                type: "spring",
                duration: 0.5,
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
