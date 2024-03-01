import React, {useContext} from "react";

import Product from "./Product";
import Cart from "./Cart";
import Title from "./Title";
import CartContext from "../store/Cart-Context";

const Body = ()=>{
    const cartCntxt = useContext(CartContext);


    return (
        <>
            <Title/>
            <Product/>
            {cartCntxt.cartOpen && <Cart/>}
            
        </>
    )
};

export default Body;