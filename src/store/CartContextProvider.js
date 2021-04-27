import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {items:[], totalAmount:0}

const cartReducer = (state, action)=>{
  if (action.type === 'ADD_ITEM')
  {    
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)

    return {items:updatedItems, totalAmount:updatedTotalAmount}

    // const itemToUpdate = state.items.find(item=> item.id === action.item.id)
    // if (itemToUpdate)
    // {
    //   itemToUpdate.amount += action.item.amount
    // }
    // return {items:[...state.items, action.item], totalAmount: state.amount + action.amount }
  }

  if (action.type === 'REMOVE_ITEM')
  {    
    // return {items:[...state.items, action.item], totalAmount: state.amount + action.amount }
  }
  
  return defaultCartState
}

const CartContextProvider = (props) => {  
  
  const [cartState, dispatchCartAction]  = useReducer(cartReducer, defaultCartState)

  const addItem = (item) => {
    dispatchCartAction({type:'ADD_ITEM', item})
  };

  const removeItem = (id) => {
    dispatchCartAction({type:'REMOVE_ITEM', id})
  };

  const cartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
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
