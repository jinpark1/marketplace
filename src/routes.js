import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Market from './components/Market/Market';
import ProductDetails from './components/ProductDetails/ProductDetails';

export default (
    <Switch>
        <Route exact path='/' component={Market} />
        <Route path='/product/:id' component={ProductDetails} />
    </Switch>
)