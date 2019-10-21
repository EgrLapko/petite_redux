import React, { Component } from 'react';

import { products } from '../../../productsData';
import ProductCard from './ProductCard';

export default class ProductsPage extends Component {
    state = {
        items: products
    }
    render() {
        const { items } = this.state;
        const bras = items.filter(item => item.type === "Bras");
        return (
            <div className="products-page">
                <h1>Bras here</h1>
                <div className="products">
                {
                   bras.map((item) => {
                       return (
                           <ProductCard key={item.id} item={item} />
                       )
                   })
                }
                </div>
            </div>
        )
    }
};
