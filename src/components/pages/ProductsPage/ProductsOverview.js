import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../../redux/shop/shop-selectors';
import ProductsPreview from './ProductsPreview';

 function ProductsOverview({ collections }) {
     console.log(collections);
    return (
        <div className="products-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return (
                        <ProductsPreview key={id} {...otherCollectionProps} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(ProductsOverview)
