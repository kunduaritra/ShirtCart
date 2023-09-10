import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const ShirtList = (props) => {
  const cartCntx = useContext(CartContext);

  const buyShirtHandler = (shirt, size) => {
    const updatedShirt = {
      id: shirt.id,
      name: shirt.name,
      price: shirt.price,
      size: size,
      quantity: 1,
    };
    console.log("updatedShirt", updatedShirt);
    cartCntx.addItem(updatedShirt);
  };

  return (
    <>
      <ul className="list-none mt-2 ml-7">
        {props.shirtList.map((shirt) => (
          <li key={shirt.id}>
            {shirt.name} - Description: {shirt.description} : Price:{" "}
            {shirt.price}
            <button
              className="btn bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 m-1 rounded"
              onClick={() => buyShirtHandler(shirt, "lSize")}
            >
              Buy L {shirt.lSize}
            </button>
            <button
              className="btn bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border-primary border-2 rounded"
              onClick={() => buyShirtHandler(shirt, "mSize")}
            >
              Buy M {shirt.mSize}
            </button>
            <button
              className="btn bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded border-solid"
              onClick={() => buyShirtHandler(shirt, "sSize")}
            >
              Buy S {shirt.sSize}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShirtList;
