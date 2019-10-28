import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductCard from './ProductCard';
import { selectCollections } from '../../../redux/shop/shop-selectors';

function ProductsPage({collections}) {
    const bras = collections.filter(item => item.type === "Bras")
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
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ProductsPage);