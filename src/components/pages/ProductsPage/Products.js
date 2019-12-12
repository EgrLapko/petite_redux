import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import { selectCollection } from '../../../redux/shop/shop-selectors';
import { selectIndiVisible } from '../../../redux/indi-slider/indi-selector';
import { selectItemsFiltered, selectColorToFilter, selectSizeToFilter, selectCupToFilter } from '../../../redux/filters/filters-selectors';
import { setFilterColor, setFilterSize, setItemsFiltered, setFilterCup } from '../../../redux/filters/filters-actions';

import ProductCard from './ProductCard';
import Title from '../../misc/Title';
import IndividualPage from './indPage/IndividualPage';
import FilterPanel from '../../filters/FilterPanel';
import InnerNav from '../../layout/InnerNav';

const Products = ({ collection, indiVisible, match, itemsFiltered, setItemsFiltered, colorToFilter, sizeToFilter, cupToFilter, setFilterColor, setFilterSize, setFilterCup }) => {
    const { items } = collection;

    useEffect(() => {
        let tempItems = [...items];
        setItemsFiltered(tempItems);

    }, [items, setItemsFiltered]);


    let itemType = [...new Set(itemsFiltered.map(item => item.type).flat())].toString(); // TAKING ITEMS TYPES FOR CONDITIONAL FILTERING
    let itemCategory = [...new Set(itemsFiltered.map(item => item.category).flat())].toString(); // TAKING ITEMS CATEGORIES FOR CONDITIONAL FILTERING


    const defineSingle = (id) => { // PICK SINGLE ITEM INFO ON CLICK
        itemsFiltered.find(item => item.id === id);
    };

    const sortItems = useCallback(() => { // SORTING ITEMS WITH FILTERS STATES
        let tempItems = [...items];

        if (colorToFilter) {
            tempItems = tempItems.filter(item => item.color.includes(colorToFilter));
        } 

        if (sizeToFilter) {
            tempItems = tempItems.filter(item => item.sizes.includes(sizeToFilter));
        } 

        if (cupToFilter) {
            tempItems = tempItems.filter(item => item.cup.includes(cupToFilter));
        } 

        setItemsFiltered(tempItems);
    }, [colorToFilter, sizeToFilter, items, setItemsFiltered, cupToFilter]);


    useEffect(() => { // RE-RENDER ITEMS IF FILTER WAS CLICKED
        if (setFilterColor) { sortItems() };
        if (setFilterSize) { sortItems() };
        if (setFilterCup) { sortItems() };
    }, [ sortItems, setFilterColor, setFilterSize, setFilterCup ]);

    return (
        <div className="products">
            <Title text={itemCategory}  />
            <InnerNav type={itemType} />
            <FilterPanel 
                items={items} 
                itemsFiltered={itemsFiltered}
                category={itemCategory} 
                type={itemType} 
            />
            <div className="products-section">
                <div className="items">
                    {
                        itemsFiltered.map(item => (
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
    indiVisible: selectIndiVisible(state),
    colorToFilter: selectColorToFilter(state),
    sizeToFilter: selectSizeToFilter(state),
    cupToFilter: selectCupToFilter(state),
    itemsFiltered: selectItemsFiltered(state)
});

const mapDispatchToProps = dispatch => ({
    setFilterColor: color => dispatch(setFilterColor(color)),
    setFilterSize: size => dispatch(setFilterSize(size)),
    setFilterCup: cup => dispatch(setFilterCup(cup)),
    setItemsFiltered: items => dispatch(setItemsFiltered(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
