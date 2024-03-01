import React from "react";


const CartContext = React.createContext({
    cartOpen: false,
    setCartOpen: ()=>{},
    items: [],
    addItem: (element)=>{},
    removeItem: (id)=>{},
    setItems: ()=>{},
    total: 0,
    setTotal: ()=>{},

});


export default CartContext;