// import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCntx = useContext(CartContext);
  // let quantity = 0;
  // cartCntx.items.forEach((item) => {
  //   quantity += Number(item.quantity);
  // });
  const quantity = cartCntx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <button
      onClick={props.onClick}
      className="rounded-full ml-auto bg-blue-500 text-white px-2 py-1"
    >
      <span className="text-white">Cart</span>
      <span className="text-white"> {quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
