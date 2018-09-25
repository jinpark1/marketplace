import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Market from './components/Market/Market';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';

export default (
    <Switch>
        <Route exact path='/' component={Market} />
        <Route path='/product/:id' component={ProductDetails} />
        <Route path='/cart' component={Cart} />
    </Switch>
)