import React, { useState, useEffect, useCallback } from 'react';
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

    useEffect(() => {
        let tempItems = [...items]
        setFilteredItems(tempItems)

    }, [items])

// ---------------------- Defining states
    const [ filteredItems, setFilteredItems ] = useState(items);
    const [ colorFilter, setColorFilter ] = useState('');

// ---------------------- Fetching items types and categories for filtering
    let itemType = [...new Set(filteredItems.map(item => item.type).flat())].toString();
    let itemCategory = [...new Set(filteredItems.map(item => item.category).flat())].toString();

// ---------------------- Onclick grab info into state (for individual page)
    const defineSingle = (id) => {
        let singleProduct = filteredItems.find(item => item.id === id);
        console.log(singleProduct);
    }

// ---------------------- Sort items
    const sortItems = useCallback(() => {
        let tempItems = [...items];
        // -----> Filter by colors
        if (colorFilter) {
            tempItems = tempItems.filter(item => item.color.includes(colorFilter));
        } 

        setFilteredItems(tempItems);
            console.log(`items are sorted. new array has ${tempItems.length} items`)
    }, [colorFilter, items])

// ---------------------- Set Filter to Default
    const dropFilter = (filterName) => {
        filterName('');
        sortItems()
    }

// ---------------------- Empty all filters
    const clearFilters = () => {
        setColorFilter('');

        sortItems();
    }

    useEffect(() => {
        if (setColorFilter) {
            sortItems()
        }
    }, [colorFilter, sortItems])

    return (
        <div className="products">
            <Title text={itemCategory}  />
            <InnerNav 
                type={itemType} 
                clearFilters={clearFilters}    
            />
            <FilterPanel 
                items={items} 
                category={itemCategory} 
                type={itemType} 
                setColor={setColorFilter}
                setColorFilter={setColorFilter}
                dropFilter={dropFilter}
            />
            <div className="products-section">
                <div className="items">
                    {
                        filteredItems.map(item => (
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
