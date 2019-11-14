import React from 'react';
import { connect } from 'react-redux';


import { selectCollection } from '../../../redux/shop/shop-selectors';
import ProductCard from './ProductCard';
import Title from '../../misc/Title';

function Products({ collection }) {
    const { title, items } = collection;
    return (
        <div className="products-section">
            <Title text={title} />
            <div className="items">
                {
                    items.map(item => (
                        <ProductCard key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
  };

  
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Products);
