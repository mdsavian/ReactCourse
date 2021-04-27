import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const items = [{ id: "", name: "aaa", price: 12.25 }];

  return (
    <Modal closeCart={props.closeCart}>
      <ul className={classes["cart-items"]}>
        {items.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>Valor Total</span>
        <span>35,62</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>Fechar</button>
        <button className={classes.button}>Pedir</button>
      </div>
    </Modal>
  );
};

export default Cart;
