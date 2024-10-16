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
    token: '',
    saveToken: (token)=>{},

});


export default CartContext;