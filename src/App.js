import { useState } from "react";
import Shirt from "./Candy/Shirt";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layouts/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShowing, setCartIsShowing] = useState(false);

  const showCartHandler = () => {
    setCartIsShowing(true);
  };

  const hideCarthandler = () => {
    setCartIsShowing(false);
  };
  return (
    <CartProvider>
      {cartIsShowing && <Cart onClose={hideCarthandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Shirt />
      </main>
    </CartProvider>
  );
}

export default App;
