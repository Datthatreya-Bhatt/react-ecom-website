import React from "react";



const productsArr = [

    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    
    ]
    
    
const Product = ()=>{
    return (
        <>
            {productsArr.map((el)=>{
                return <div>

                    <p><strong>{el.title}</strong></p>
                    <img src={`${el.imageUrl}`} className="img-thumbnail" alt="..."/>
                    <p>$ {el.price}</p>
                    <button>Add to cart</button>
                </div>

            })}        
        </>
    )
};

export default Product;