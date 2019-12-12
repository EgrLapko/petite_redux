import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleColorFilter, toggleSizeFilter, toggleCupFilter, setFilterColor, setFilterSize, setFilterCup } from '../../redux/filters/filters-actions';
import { selectColorFilter, selectSizeFilter, selectCupFilter } from '../../redux/filters/filters-selectors';


const FilterPanel = ({ items, category, type, 
    toggleColorFilter, toggleCupFilter, toggleSizeFilter, setFilterColor, setFilterSize, setFilterCup,
    colorFilterHidden, sizeFilterHidden, cupFilterHidden }) => {

    let colors = [...new Set(items.map(item => item.color).flat())];
    let sizes = [...new Set(items.map(item => item.sizes).flat())];
    let cups = [...new Set(items.map(item => item.cup).flat())];
    
    return (
        <div className="filter-panels">
            {
                category !== "Accessories, other" ? 
                <React.Fragment>
                    <div className="filter">
                        <h3 className="filter-title" onClick={toggleColorFilter}>Color<i className="fas fa-angle-down"></i></h3>
                        <ul className={`filter-list  ${!colorFilterHidden && "opened-filter"}`}>
                            {   
                                colors.map((color, index) => (  
                                    <li className="filter-item color-filter" key={index} onClick={() => setFilterColor(color)}> 
                                        <div className="color-ball" style={{ backgroundColor: color }} />
                                        {color} 
                                    </li>
                                ))
                            }
                            <button className="btn">Clear</button>
                        </ul>
                    </div>
                </React.Fragment>
                : null
            }
            {
                category !== "Bras, bralettes" && category !== "Accessories, socks" && category !== "Accessories, other" ?
                <React.Fragment>
                    <div className="filter">
                        <h3 className="filter-title" onClick={toggleSizeFilter}>Size<i className="fas fa-angle-down"></i></h3>
                         <ul className={`filter-list  ${!sizeFilterHidden && "opened-filter"}`}>
                            {
                                sizes.map((sizes, index) => (
                                    <li className="filter-item" key={index} onClick={() => setFilterSize(sizes)}> 
                                        {sizes} 
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </React.Fragment>
                : null
            }
            {
                type === "Bras" | category === "Accessories, bodysuits" ?
                <React.Fragment>
                    <div className="filter">
                        <h3 className="filter-title" onClick={toggleCupFilter}>Cup<i className="fas fa-angle-down"></i></h3>
                         <ul className={`filter-list  ${!cupFilterHidden && "opened-filter"}`}>
                            {
                                cups.map((cup, index) => (
                                    <li className="filter-item" key={index} onClick={() => setFilterCup(cup)}> {cup} </li>
                                ))
                            }
                        </ul>
                    </div>
                </React.Fragment>
                : null
            }  
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    colorFilterHidden: selectColorFilter,
    sizeFilterHidden: selectSizeFilter,
    cupFilterHidden: selectCupFilter
})

const mapDispatchToProps = dispatch => ({
    toggleColorFilter: () => dispatch(toggleColorFilter()),
    toggleCupFilter: () => dispatch(toggleCupFilter()),
    toggleSizeFilter: () => dispatch(toggleSizeFilter()),
    setFilterColor: color => dispatch(setFilterColor(color)),
    setFilterSize: size => dispatch(setFilterSize(size)),
    setFilterCup: cup => dispatch(setFilterCup(cup))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
