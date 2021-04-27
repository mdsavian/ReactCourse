import React from "react";

const CartContext = React.createContext({
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
  items:[],
  totalAmount:0,
  addItem:()=>{},
  removeItem:()=>{},
});

export default CartContext;
