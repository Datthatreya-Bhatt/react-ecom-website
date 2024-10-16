import React, {useContext, useRef} from "react";
import {useHistory} from 'react-router-dom';

import './Login.css'
import CartContext from "../store/Cart-Context";
import CartProvider from "../store/Cart-Provider";


function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const cartCntxt = useContext(CartContext);


    const history = useHistory();

    const submitHandler = async ()=>{
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        try{
            let response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkO5rdZEzjw9P75D_iKdLdOd57SQcqOTU", {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },

            });

            response = await response.json();
            // console.log(response);

            if(response.idToken){
                console.log(cartCntxt)
                cartCntxt.saveToken(response.idToken);
                history.replace('/store')
            }
            else{
                console.log(response)
                alert(response.error.message)
            }

        }catch(err){
            console.log(err);
            alert(err);
        }
    }

    
    return (
        <div className="login-container">
            <div className="inside-login-container">
                <h5 className="login-items">Login</h5>
                <input className="login-items" type="text" placeholder="Enter email" ref={emailRef}/>
                <input className="login-items"  type="password" placeholder="Enter password" ref={passwordRef}/>
                <input className="login-items" type="button" value="Submit" onClick={submitHandler}/>

            </div>
        </div>
    )
};


export default Login;

