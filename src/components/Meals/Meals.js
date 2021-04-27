import AvailableMeals from "./AvailableMeals";
import classes from "./Meals.module.css";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
  <>
    <MealsSummary />
    <AvailableMeals/>
  </>
  )
};

export default Meals;
