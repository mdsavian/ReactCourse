import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { mealData } = props;
  const formattedPrice = `R$ ${mealData.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealData.name}</h3>
        <div className={classes.description}> {mealData.description}</div>
        <div className={classes.price}> {formattedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
