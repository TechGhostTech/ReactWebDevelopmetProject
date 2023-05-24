import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Switch, Route } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar />
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        
        </Switch>
      
    </>
  );
}

export default App;
