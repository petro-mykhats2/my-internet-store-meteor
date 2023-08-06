import React from 'react';
import AddProduct from '../../client/AddProduct.js';
import ProductList from '../../client/ProductList.js';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <h2>06.08.2023 test chenged</h2>
    <Hello/>
    <Info/>
    <AddProduct />
    <ProductList />
  </div>
);
