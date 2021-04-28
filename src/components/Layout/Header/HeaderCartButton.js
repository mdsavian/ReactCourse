import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numberOfCartItems = items.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;

    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button}  ${btnHighlighted ? classes.bump : ""}`;

  return (
    <>
      <button className={btnClasses} onClick={props.openCart}>
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
