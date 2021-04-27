import { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  
  const [items, setItem] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

 

  const addItem = (item) => {
    setItem((prevState) => {
      return [...prevState, item];
    });

    const totalAmountToUpdate = totalAmount + item.amount;
    setTotalAmount(totalAmountToUpdate);
  };

  const removeItem = (item) => {
    // remover
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
