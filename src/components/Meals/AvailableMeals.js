import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./dummyMeals";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return <MealItem key={meal.id} mealData={meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
