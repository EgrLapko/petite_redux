import React, { Component } from 'react';

import { shopData } from '../../../shopData';
import ProductCard from './ProductCard';

export default class ProductsPage extends Component {
    state = {
        items: shopData
    }
    render() {
        const { items } = this.state;
        return (
            <div className="products-page">
                <h1>Bras here</h1>
                <div className="products">
                {
                   items.map(({id, ...otherCollectionProps}) => {
                       return (
                           <ProductCard key={id} {...otherCollectionProps} />
                       )
                   })
               }
                </div>
            </div>
        )
    }
};
