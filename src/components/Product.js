import React, { useContext } from "react";
import CartContext from "../store/Cart-Context";



const productsArr = [

    {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 1
    },
    
    {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 1
    
    },
    
    {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1

    
    },
    
    {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1

    }
    
    ]
    
    
const Product = ()=>{

    const cartctx = useContext(CartContext);


    return (
        <div className="container">
            <div className="row">
            {productsArr.map((el)=>{
                return <div className="col-md-6" key={el.id}>

                    <p><strong>{el.title}</strong></p>
                    <img src={`${el.imageUrl}`} className="img-thumbnail" alt="failed"/>
                    <div className="container">
                        <div className="row">
                            <p className="col-md-4">$ {el.price}</p>
                            <button className="btn btn-info btn-sm col-md-2" onClick={()=> cartctx.addItem(el)}>Add to cart</button>
                        </div>
                    </div>
                </div>

            })}    
            </div>    
        </div>
    )
};

export default Product;