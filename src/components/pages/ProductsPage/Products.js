import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import { selectCollection } from '../../../redux/shop/shop-selectors';
import { selectIndiVisible } from '../../../redux/indi-slider/indi-selector';

import ProductCard from './ProductCard';
import Title from '../../misc/Title';
import IndividualPage from './indPage/IndividualPage';

const Products = ({ collection, indiVisible, match }) => {

    useEffect(() => {
        if (indiVisible) {document.body.style.overflow = 'hidden'};
        return () => {
            document.body.style.overflow = 'auto'
        }
    })

    const { title, items } = collection;

    const defineSingle = (id) => {
        let singleProduct = items.find(item => item.id === id);
        console.log(singleProduct);
    }

    return (
        <div className="products">
            <div className="products-section">
                <Title text={title} />
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
