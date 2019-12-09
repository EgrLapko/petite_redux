import React from 'react';
import { connect } from 'react-redux';

const FilterPanel = ({ items, category, type }) => {

    let colors = [...new Set(items.map(item => item.color).flat())];
    let sizes = [...new Set(items.map(item => item.sizes).flat())];
    let cups = [...new Set(items.map(item => item.cup).flat())];

    return (
        <div className="filter-panels">
            {
                category !== "Accessories, other" ? 
                <React.Fragment>
                    <div className="filter">
                        <h3>Color</h3>
                        <ul className="filter-list filter-color">
                            {   
                                colors.map((color, index) => (
                                    <li className="filter-item" key={index}> {color} </li>
                                ))
                            }
                        </ul>
                    </div>
                </React.Fragment>
                : null
            }
            {
                category !== "Bras, bralettes" && category !== "Accessories, socks" && category !== "Accessories, other" ?
                <React.Fragment>
                    <div className="filter">
                        <h3>Size</h3>
                        <ul className="filter-list filter-size">
                            {
                                sizes.map((sizes, index) => (
                                    <li className="filter-item" key={index}> {sizes} </li>
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
                        <h3>Cup</h3>
                        <ul className="filter-list filter-cup">
                            {
                                cups.map((cup, index) => (
                                    <li className="filter-list" key={index}> {cup} </li>
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

export default connect()(FilterPanel)
