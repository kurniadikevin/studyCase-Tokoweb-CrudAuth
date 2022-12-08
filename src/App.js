import React, { useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Login } from './pages/Login';
import Create from './pages/component/create';
import Delete from './pages/component/delete';
import Update from './pages/component/update';
import ProductDetail from './pages/component/productDetail';

const App = () => {

const  [currentUser,setCurrentUser]= useState({name : 'Not logged In'});

const pull_data = (data) => { 
  setCurrentUser(data);
}

 return(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact >
          <HomePage currentUser={currentUser}/>
        </Route>
        <Route path="/productDetail/:product_id" >
          <ProductDetail  currentUser={currentUser}/>  
        </Route>
        <Route path="/login" >
          <Login  func={pull_data}/>
        </Route>
        <Route path="/create">
          <Create  currentUser={currentUser}/>
        </Route>
        <Route path="/delete/product/:product_id">
          <Delete  currentUser={currentUser} />
        </Route>
        <Route path="/update/product/:product_id">
          <Update  currentUser={currentUser} />
        </Route>
    </Switch>
  </BrowserRouter>
 )
};

export default App;