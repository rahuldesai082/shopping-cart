import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Page/Home/Home';
import Checkout from './Page/Checkout/Checkout';
import { CHECKOUT, HOME } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
