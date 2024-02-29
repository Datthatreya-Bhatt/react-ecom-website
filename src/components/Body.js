import React, {useState} from "react";

import Product from "./Product";
import Cart from "./Cart";

const Body = ()=>{
    const [showCart, setShowCart] = useState(false);


    return (
        <>
            <Product/>
            {showCart && <Cart setShowCart={setShowCart}/>}
            
        </>
    )
};

export default Body;