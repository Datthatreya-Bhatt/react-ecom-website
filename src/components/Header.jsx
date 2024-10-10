import React, {useContext} from "react";

import CartContext from "../store/Cart-Context";

import { NavLink } from 'react-router-dom';



const Header = () => {

    const cartCntxt = useContext(CartContext);


   
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top text-white"> 
            <ul className="navbar-nav mx-auto d-flex flex-row"> 
                <li className="nav-item me-5"><NavLink to="/" className={({isActive})=> isActive ? '': ''} end>Home</NavLink></li>
                <li className="nav-item me-3"><NavLink to="/store" className={({isActive})=> isActive ? '': ''}>Store   </NavLink></li>
                <li className="nav-item me-3"> <NavLink to="/about" className={({isActive})=> isActive ? '': ''}>About</NavLink></li>
                <li className="nav-item me-3"> <NavLink to="/contact" className={({isActive})=> isActive ? '': ''}>Contact</NavLink></li>
            </ul>
            
            <button type="button" className="btn btn-outline-info btn-sm me-3" onClick={()=>cartCntxt.setCartOpen(true)}>
                Cart <span className="badge text-bg-secondary bg-danger me-3">{cartCntxt.items.length}</span>
            </button>
        </nav>
    )
};

export default Header;
