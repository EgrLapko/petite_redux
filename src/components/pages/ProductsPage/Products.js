import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import { selectCollection } from '../../../redux/shop/shop-selectors';
import { selectIndiVisible } from '../../../redux/indi-slider/indi-selector';

import ProductCard from './ProductCard';
import Title from '../../misc/Title';
import IndividualPage from './indPage/IndividualPage';
import FilterPanel from '../../filters/FilterPanel';
import InnerNav from '../../layout/InnerNav';

const Products = ({ collection, indiVisible, match }) => {
    const { title, items } = collection;

    const defineSingle = (id) => {
        let singleProduct = items.find(item => item.id === id);
        console.log(singleProduct);
    }

    let itemType = [...new Set(items.map(item => item.type).flat())].toString();
    let itemCategory = [...new Set(items.map(item => item.category).flat())].toString();

    return (
        <div className="products">
            <Title text={itemCategory} />
            <InnerNav 
                type={itemType}
            />
            <FilterPanel items={items} category={itemCategory} type={itemType} />
            <h1> {items.length} </h1>
            <div className="products-section">
                <div className="items">
                    {
                        items.map(item => (
                            <ProductCard 
                                key={item.id} 
                                item={item} 
                                defineSingle={defineSingle}
                            />
                        ))
                    }
                </div>  
            </div>
            <Route path={`${match.path}/:id&:title`} render={(props) => <IndividualPage {...props} indiVisible={indiVisible} />} />
        </div>
        
    )
  };

  
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state),
    indiVisible: selectIndiVisible(state)
});

export default connect(mapStateToProps)(Products);
