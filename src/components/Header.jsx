import React, { useContext } from "react";

import CartContext from "../store/Cart-Context";

import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const cartCntxt = useContext(CartContext);

  return (
    <div className="header-container">
      <div>
        <NavLink activeClassName="header-item-normal" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="header-item-normal" to="/store">
          Store
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="header-item-normal" to="/about">
          About
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="header-item-normal" to="/contact">Contact</NavLink>
      </div>
      <div>
        <NavLink activeClassName="header-item-normal" to="/login">Login</NavLink>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-info btn-sm me-3"
          onClick={() => cartCntxt.setCartOpen(true)}
        >
          Cart
          <span className="badge text-bg-secondary bg-danger me-3">
            {cartCntxt.items.length}
          </span>
        </button>
      </div>
    </div>

    // <div className="header-container">
    //   <div className="header-items">
    //     <NavLink to="/" className={({ isActive }) => (isActive ? "header-items-1" : "header-items-2")} end>
    //       Home
    //     </NavLink>
    //   </div>
    //   <div className="header-items">
    //     <NavLink to="/store" className={({ isActive }) => (isActive ? "header-items-1" : "header-items-2")}>
    //       Store
    //     </NavLink>
    //   </div>
    //   <div className="header-items">
    //     <NavLink to="/about" className={({ isActive }) => (isActive ? "header-items-1" : "header-items-2")}>
    //       About
    //     </NavLink>
    //   </div>
    //   <div className="header-items">
    //     <NavLink
    //       to="/contact"
    //       className={({ isActive }) => (isActive ? "header-items-1" : "header-items-2")}
    //     >
    //       Contact
    //     </NavLink>
    //   </div>
    //   <div className="header-items">
    //     <button
    //       type="button"
    //       className="btn btn-outline-info btn-sm me-3"
    //       onClick={() => cartCntxt.setCartOpen(true)}
    //     >
    //       Cart
    //       <span className="badge text-bg-secondary bg-danger me-3">
    //         {cartCntxt.items.length}
    //       </span>
    //     </button>
    //   </div>
    // </div>
  );
};

export default Header;
