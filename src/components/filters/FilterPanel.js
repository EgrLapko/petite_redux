import React from 'react';
import { connect } from 'react-redux';

const FilterPanel = ({ items }) => {

    let colors = [...new Set(items.map(item => item.color).flat())];
    let sizes = [...new Set(items.map(item => item.sizes).flat())];
    let cups = [...new Set(items.map(item => item.cup).flat())];

    return (
        <div className="filter-panels">
            <ul className="filter-list">
                {
                    colors.map((color, index) => (
                        <li className="filter-item" key={index}> {color} </li>
                    ))
                }
            </ul>
            <ul className="filter-list">
                {
                    sizes.map((sizes, index) => (
                        <li className="filter-item" key={index}> {sizes} </li>
                    ))
                }
            </ul>
            <ul className="filter-list">
                {
                    cups.map((cup, index) => (
                        <li className="filter-list" key={index}> {cup} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default connect()(FilterPanel)
