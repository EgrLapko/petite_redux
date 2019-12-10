import React, { useState } from 'react';
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
    const { items } = collection;

    const [ filteredItems, setFilteredItems ] = useState([]);
    const [ colorFilter, setColorFIlter ] = useState('');

    let itemType = [...new Set(items.map(item => item.type).flat())].toString();
    let itemCategory = [...new Set(items.map(item => item.category).flat())].toString();

    const defineSingle = (id) => {
        let singleProduct = items.find(item => item.id === id);
        console.log(singleProduct);
    }

    const filterByColor = (color) => {
        setColorFIlter(color);
        console.log(`now color is ${color}`)
        sortItems();
    }

    const sortItems = () => {
        let tempItems = items;
        // -----> Filter by colors
        if (colorFilter) {
            tempItems = tempItems.filter(item => item.color.includes(colorFilter))
        }
        console.log(tempItems);
    }

    return (
        <div className="products">
            <Title text={itemCategory}  />
            <InnerNav type={itemType} />
            <FilterPanel 
                items={items} 
                category={itemCategory} 
                type={itemType} 
                filterByColor={filterByColor}
            />
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
