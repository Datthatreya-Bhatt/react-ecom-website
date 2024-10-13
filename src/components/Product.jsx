import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import CartContext from "../store/Cart-Context";

import "./Product.css";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Product = () => {
  const cartctx = useContext(CartContext);

  return (
    <div className="product-container">
      {productsArr.map((el) => {
        return (
          <div className="product-item-container" key={el.id}>
            <p className="product-item-name">
              <strong>{el.title}</strong>
            </p>
            <Link to={`/product/${el.id}`}>
            
            <img
              className="product-item-img"
              src={`${el.imageUrl}`}
              alt="failed"
            />
            </Link>
            

            <p className="product-item-price">$ {el.price}</p>
            <button
              className="product-button btn btn-info btn-sm col-md-2"
              onClick={() => cartctx.addItem(el)}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
