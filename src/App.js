
import React, { useState } from 'react'
import Header from './components/Layout/Header';
import Med from './components/Medicine/Med';
import CartProvider from './store/CartProvider'
import './App.css';
import Cart from './components/Cart/Cart';


function App() {
 const [cart,setCart] =useState(false);

 const onShowCartHandler=()=>{
  setCart(true);
 }
 const onHideCartHandler=()=>{
  setCart(false);
 }
  return (
    <CartProvider>
   { cart && <Cart onHideCart={onHideCartHandler} /> }
  { !cart &&  <Header onShowCart={onShowCartHandler}/>}
   {!cart &&  <Med/>}
    </CartProvider>
  );
}

export default App;
