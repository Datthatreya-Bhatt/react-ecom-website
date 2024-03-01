import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import CartProvider from './store/Cart-Provider';


function App() {



  return (
   
    <CartProvider>
      <Header/>
      <Body/>
      <Footer/>
    </CartProvider>
   
  );
}

export default App;
