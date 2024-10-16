import React, { useState } from "react";

import CartContext from "./Cart-Context";

const CartProvider = (props) => {
console.log('main function called')
  const initialToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(initialToken);

  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  function addItem(element) {
    let tag = true;

    let temp = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === element.id) {
        items[i].quantity++;
        tag = false;
      }
      temp.push(items[i]);
    }

    if (tag) {
      setItems([...items, element]);
    } else {
      setItems(temp);
    }
  }

  function removeItem(id) {}

  function saveToken(token) {
    console.log(token, 'This is token')
    localStorage.setItem("token", token);
    setToken(token);
  }

  const cartctx = {
    cartOpen: cartOpen,
    setCartOpen: setCartOpen,
    items: items,
    addItem: addItem,
    setItems: setItems,
    removeItem: removeItem,
    total: total,
    setTotal: setTotal,
    saveToken: ()=> saveToken(token),
    token: token,
  };

  return (
    <CartContext.Provider value={cartctx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
