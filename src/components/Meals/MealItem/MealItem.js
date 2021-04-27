import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const { mealData } = props;
  const formattedPrice = `R$ ${mealData.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const addOnCardHandle = (amount) => {
    console.log(amount);

    ctx.addItem({
      id: mealData.id,
      name: mealData.name,
      price: mealData.price,
      amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{mealData.name}</h3>
        <div className={classes.description}> {mealData.description}</div>
        <div className={classes.price}> {formattedPrice}</div>
      </div>
      <div>
        <MealItemForm addOnCard={addOnCardHandle} />
      </div>
    </li>
  );
};

export default MealItem;
