import React, {useContext} from "react";


import CartContext from "../store/Cart-Context";



const cartElements = [
    {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    
    {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    
    {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]


const Cart = ()=>{

    const cartCntxt = useContext(CartContext);

    return (
        <div className={`offcanvas ${cartCntxt.cartOpen ? 'offcanvas-end show' : ''}`} tabIndex="-1" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Cart Items</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>cartCntxt.setCartOpen(false)}></button>
            </div>



            <div className="offcanvas-body d-flex flex-column">


                {cartCntxt.items.map((element) => (
                    <div key={element.id} className="p-2">
                        
                        <div className="" >
                            <span className="">
                                <img className="" src={`${element.imageUrl}`} alt=""/>
                                <span>{element.title}</span>
                            </span>
                            <span className="">{element.price}</span>
                            <span className="">
                                <input type="text" defaultValue={`${element.quantity}`}/>
                                <button className="btn btn-danger btn-sm">REMOVE</button>
                            </span>
                        </div>

                    </div>
                ))}
                <div className="p-2">
                    <h4>Total Amount: {cartCntxt.total}</h4>
                    <button className="btn btn-primary btn-sm me-3" onClick={() => cartCntxt.setCartOpen(false)}>Close</button>
                    <button className="btn btn-primary btn-sm me-3" onClick={() => { cartCntxt.setItems([]); alert('Thanks for your purchase!'); cartCntxt.setTotal(0) }}>Buy</button>
                </div>
        </div>


        </div>

    )
};


export default Cart;


