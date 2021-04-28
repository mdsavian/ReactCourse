import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.amount;
  }, 0);

  return (
    <>
      <button className={classes.button} onClick={props.openCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Seu Carrinho</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
