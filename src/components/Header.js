import React, {useContext} from "react";

import CartContext from "../store/Cart-Context";




const Header = () => {

    const cartCntxt = useContext(CartContext);


   
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top text-white"> 
            <ul className="navbar-nav mx-auto d-flex flex-row"> 
                <li className="nav-item me-5">Home</li>
                <li className="nav-item me-3">Store</li>
                <li className="nav-item me-3">About</li>
            </ul>
            
            <button type="button" className="btn btn-outline-info btn-sm me-3" onClick={()=>cartCntxt.setCartOpen(true)}>
                Cart <span className="badge text-bg-secondary bg-danger me-3">{cartCntxt.items.length}</span>
            </button>
        </nav>
    )
};

export default Header;
