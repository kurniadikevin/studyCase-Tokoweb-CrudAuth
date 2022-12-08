import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Login } from './pages/Login';
import Create from './pages/component/create';
import Delete from './pages/component/delete';
import Update from './pages/component/update';
import ProductDetail from './pages/component/productDetail';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/productDetail/:product_id"  component={ProductDetail} />
      <Route path="/login" exact component={Login} />
      <Route path="/create" exact component={Create} />
      <Route path="/delete/product/:product_id" exact component={Delete} />
      <Route path="/update/product/:product_id" exact component={Update} />
    </Switch>
  </BrowserRouter>
);

export default App;