import React, {useContext} from "react";

import Product from "./Product";
import Cart from "./Cart";
import Title from "./Title";
import CartContext from "../store/Cart-Context";

import './Body.css'

const Body = ()=>{
    const cartCntxt = useContext(CartContext);


    return (
        <>
            <Title/>
            <h2>Tours</h2>
            <div>
            <div className="tour-item">
                <span className="tour-date">JUL16</span>
                <span className="tour-place">DETROIT, MI</span>
                <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL19</span>
                <span className="tour-place">TORONTO,ON</span>
                <span className="tour-spec-place">BUDWEISER STAGE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL 22</span>
                <span className="tour-place"> BRISTOW, VA</span>
                <span className="tour-spec-place">JIGGY LUBE LIVE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL 29</span>
                <span className="tour-place">PHOENIX, AZ</span>
                <span className="tour-spec-place"> AK-CHIN PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">AUG 2</span>
                <span className="tour-place">LAS VEGAS, NV</span>
                <span className="tour-spec-place">T-MOBILE ARENA</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">AUG 7</span>
                <span className="tour-place">CONCORD, CA</span>
                <span className="tour-spec-place"> CONCORD PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
        </div>

            {cartCntxt.cartOpen && <Cart/>}
            
        </>
    )
};

export default Body;