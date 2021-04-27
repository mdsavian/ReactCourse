
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  return (
    <CartContextProvider>
      {isOpen && <Cart closeCart={handleCloseCart}/>}
      <Header openCart={handleOpenCart}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
