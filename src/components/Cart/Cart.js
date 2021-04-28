import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const addCartItemHandler = (item) => {
    ctx.addItem({...item, amount:1});
  };

  const removeCartItemHandler = (id) => {
    ctx.removeItem(id);
  };

  return (
    <Modal closeCart={props.closeCart}>
      <ul className={classes["cart-items"]}>
        {ctx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              onAdd={addCartItemHandler.bind(null, item)}
              onRemove={removeCartItemHandler.bind(null,item.id)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Valor Total</span>
        <span>{`R$ ${ctx.totalAmount.toFixed(2)}`}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Fechar
        </button>
        {ctx.items.length > 0 && (
          <button className={classes.button}>Pedir</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
