import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Page/Home/Home';
import Checkout from './Page/Checkout/Checkout';
import { CHECKOUT, HOME } from './routes';
import { CartState } from './Context/Context';

function App() {
  const { uiDispatch } = CartState();
  //choose the screen size 
  const handleResize = useCallback(() => {
    uiDispatch && uiDispatch({
      type: "SET_IS_MOBILE",
      payload: window.innerWidth < 720,
    })
  },[uiDispatch])

  useEffect(() => {
    handleResize();
  },[handleResize]);
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[handleResize])
  return (
    <BrowserRouter>
      <div data-testId='App' className="App">
        <Header/>
        <Routes>
          <Route path={HOME} element={<Home/>}/>
          <Route path={CHECKOUT} element={<Checkout/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
