import React, { useContext } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import CartProvider from "./store/Cart-Provider";
import About from "./components/About";
import Store from "./components/Store";
import Contact from "./components/Contact";
import Product_detail from "./components/Product-detail";
import Login from "./components/Login";
import CartContext from "./store/Cart-Context";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/about", element: <About /> },
//   { path: "/store", element: <Store /> },
//   { path: "/contact", element: <Contact /> },
// ]);

function App() {
  const cartCntxt = useContext(CartContext);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <CartProvider>
            <Header />
            <Body />
            <Footer />
          </CartProvider>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
        {cartCntxt.isLoggedIn && <Store />}
        {!cartCntxt.isLoggedIn && <Redirect to="/login"/>}
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/product/:productId">
          <Product_detail />
        </Route>
      </Switch>
    </div>

    // <CartProvider>
    //   <Header/>
    //   <Body/>
    //   <Footer/>
    // </CartProvider>
  );
}

export default App;
