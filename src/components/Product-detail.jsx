import React from "react";
import { useParams } from "react-router-dom";
import "./Product-detail.css";

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

function Product_detail() {
  const param = useParams();
  console.log(param.productId, "This is pram");
  return (
    <div className="product-detail-container">
      {productsArr.map((el) => {
        if (el.id === Number(param.productId)) {
          return (
            <div className="product-item-container" key={el.id}>
              <p className="product-item-name">
                <strong>{el.title}</strong>
              </p>

              <img
                className="product-item-img"
                src={`${el.imageUrl}`}
                alt="failed"
              />

              <p className="product-item-price">$ {el.price}</p>
              <button
                className="product-button btn btn-info btn-sm col-md-2"
                onClick={() => cartctx.addItem(el)}
              >
                Add to cart
              </button>
            </div>
          );
        }
        else{
            return <></>
        }
      })}
    </div>
  );
}

export default Product_detail;
