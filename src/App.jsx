import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";
import Checkout from "./components/Checkout";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState({
    cart: false,
    checkout: false,
  });

  function handleClose() {
    setIsDialogOpen({
      cart: false,
      checkout: false,
    });
  }

  function handleCheckout() {
    setIsDialogOpen({
      cart: false,
      checkout: true,
    });
  }

  function handleOpen() {
    setIsDialogOpen({
      cart: true,
      checkout: false,
    });
  }

  return (
    <CartContextProvider>
      <Header onOpen={handleOpen} />
      <Meals />
      <Cart
        isDialogOpen={isDialogOpen.cart}
        onClose={handleClose}
        onCheckout={handleCheckout}
      />
      <Checkout isDialogOpen={isDialogOpen.checkout} onClose={handleClose} />
    </CartContextProvider>
  );
}

export default App;
