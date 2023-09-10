import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id && prevItem.size === item.size
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItemToCartHandler = (id) => {};
  const updateItemToCartHandler = (id, newQuantity) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    updateItem: updateItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
