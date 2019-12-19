import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleColorFilter, toggleSizeFilter, toggleCupFilter, setFilterColor, setFilterSize, setFilterCup,
    removeColorFilter, removeCupFilter, removeSizeFilter, clearFiltersValues, setSmallGrid, setNormalGrid } from '../../redux/filters/filters-actions';
import { selectColorFilter, selectSizeFilter, selectCupFilter, 
    selectColorToFilter, selectSizeToFilter, selectCupToFilter, selectGridSmall } from '../../redux/filters/filters-selectors';


const FilterPanel = ({ items, category, type, itemsFiltered, clearFiltersValues,
    toggleColorFilter, toggleCupFilter, toggleSizeFilter, setFilterColor, setFilterSize, setFilterCup,
    colorFilterHidden, sizeFilterHidden, cupFilterHidden, removeColorFilter, removeCupFilter, removeSizeFilter,
    colorToFilter, sizeToFilter, cupToFilter, setSmallGrid, setNormalGrid, gridSmall }) => {

    let colors = [...new Set(items.map(item => item.color).flat())];
    let sizes = [...new Set(items.map(item => item.sizes).flat())];
    let cups = [...new Set(items.map(item => item.cup).flat())];

    return (
        <div className="filter-panels">
            {
                category !== "Accessories, other" ? 
                <React.Fragment>
                    <div className="filter">
                        <h3 className="filter-title" onClick={toggleColorFilter}>
                            Color{colorToFilter && `: ${colorToFilter}`}
                            <i className="fas fa-angle-down"/>
                        </h3>
                        <ul className={`filter-list  ${!colorFilterHidden && "opened-filter"}`}>
                            {   
                                colors.map((color, index) => (  
                                    <li className={`filter-item color-filter ${color === colorToFilter && "filter-active" }`} key={index} onClick={() => { setFilterColor(color); setTimeout(toggleColorFilter, 500)}}> 
                                        <div className="color-ball" style={ {backgroundColor: color} } />
                                        {color} 
                                    </li>
                                ))
                            }
                            <button className="btn btn-simple" onClick={() => {removeColorFilter(); setTimeout(toggleColorFilter, 500)}}>Clear</button>
                        </ul>
                    </div>
                </React.Fragment>
                : null
            }
            {
                category !== "Bras, bralettes" && category !== "Accessories, socks" && category !== "Accessories, other" ?
                <React.Fragment>
                    <div className="filter">
                        <h3 className="filter-title" onClick={toggleSizeFilter}>
                            Size{sizeToFilter && `: ${sizeToFilter}`}
                            <i className="fas fa-angle-down"/>
                        </h3>
                         <ul className={`filter-list  ${!sizeFilterHidden && "opened-filter"}`}>
                            {
                                sizes.map((sizes, index) => (
                                    <li className={`filter-item ${sizes === sizeToFilter && "filter-active" }`} key={index} onClick={() => { setFilterSize(sizes); setTimeout(toggleSizeFilter, 500)}}> 
                                        {sizes} 
                                    </li>
                                ))
                            }
                            <button className="btn btn-simple" onClick={() => {removeSizeFilter(); setTimeout(toggleSizeFilter, 500)}}>Clear</button>
                        </ul>
                    </div>
                </React.Fragment>
                : null
            }
            {
                type === "Bras" | category === "Accessories, bodysuits" ?
                <React.Fragment>
                    <div className="filter">
                        <h3 className="filter-title" onClick={toggleCupFilter}>
                            Cup{cupToFilter && `: ${cupToFilter}`}
                            <i className="fas fa-angle-down"/>
                        </h3>
                         <ul className={`filter-list  ${!cupFilterHidden && "opened-filter"}`}>
                            {
                                cups.map((cup, index) => (
                                    <li className={`filter-item ${cup === cupToFilter && "filter-active" }`} key={index} onClick={() => {setFilterCup(cup); setTimeout(toggleCupFilter, 500)}}> {cup} </li>
                                ))
                            }
                            <button className="btn btn-simple" onClick={() => { removeCupFilter(); setTimeout(toggleCupFilter, 500) }}>Clear</button>
                        </ul>
                    </div>
                </React.Fragment>
                : null
            }  
            { cupToFilter || sizeToFilter || colorToFilter ? <button className="btn btn-simple close-btn" onClick={() => clearFiltersValues()}>&#10005;</button> : null }
            <div className="items-counter">
                <p className="counter-text"> <span>{itemsFiltered.length}</span> item{itemsFiltered.length > 1 && "s"}</p>
            </div>
            <div className="grid-buttons">
                <div className={`grid-icon ${gridSmall && "grid-active"}`} onClick={() => setSmallGrid()}><i className="fas fa-th"></i></div>
                <div className={`grid-icon ${!gridSmall && "grid-active"}`} onClick={() => setNormalGrid()}><i className="fas fa-th-large"></i></div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    colorFilterHidden: selectColorFilter,
    sizeFilterHidden: selectSizeFilter,
    cupFilterHidden: selectCupFilter,
    colorToFilter: selectColorToFilter,
    sizeToFilter: selectSizeToFilter,
    cupToFilter: selectCupToFilter,
    gridSmall: selectGridSmall
})

const mapDispatchToProps = dispatch => ({
    toggleColorFilter: () => dispatch(toggleColorFilter()),
    toggleCupFilter: () => dispatch(toggleCupFilter()),
    toggleSizeFilter: () => dispatch(toggleSizeFilter()),
    setFilterColor: color => dispatch(setFilterColor(color)),
    setFilterSize: size => dispatch(setFilterSize(size)),
    setFilterCup: cup => dispatch(setFilterCup(cup)),
    removeColorFilter: () => dispatch(removeColorFilter()),
    removeSizeFilter: () => dispatch(removeSizeFilter()),
    removeCupFilter: () => dispatch(removeCupFilter()),
    clearFiltersValues: () => dispatch(clearFiltersValues()),
    setSmallGrid: () => dispatch(setSmallGrid()),
    setNormalGrid: () => dispatch(setNormalGrid())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
