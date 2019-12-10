import React, {useState} from 'react';
import { connect } from 'react-redux';

const FilterPanel = ({ items, category, type, filterByColor }) => {

    const [colorFilter, setColorFilter] = useState(false);
    const [sizeFilter, setSizeFilter] = useState(false);
    const [cupFilter, setCupFilter] = useState(false)

    let colors = [...new Set(items.map(item => item.color).flat())];
    let sizes = [...new Set(items.map(item => item.sizes).flat())];
    let cups = [...new Set(items.map(item => item.cup).flat())];

    const handleFilter = (filter, action) => {
        action( !filter );
    }
    
    return (
        <div className="filter-panels">
            {
                category !== "Accessories, other" ? 
                <React.Fragment>
                    <div className="filter">
                        <h3 className="filter-title" onClick={() => handleFilter(colorFilter, setColorFilter)}>Color<i className="fas fa-angle-down"></i></h3>
                        <ul className={`filter-list  ${colorFilter && "opened-filter"}`}>
                            {   
                                colors.map((color, index) => (  
                                    <li className="filter-item color-filter" key={index} onClick={() => filterByColor(color)}> 
                                        <div className="color-ball" style={{ backgroundColor: color }} />
                                        {color} 
                                    </li>
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
                        <h3 className="filter-title" onClick={() => handleFilter(sizeFilter, setSizeFilter)}>Size<i className="fas fa-angle-down"></i></h3>
                         <ul className={`filter-list  ${sizeFilter && "opened-filter"}`}>
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
                        <h3 className="filter-title" onClick={() => handleFilter(cupFilter, setCupFilter)}>Cup<i className="fas fa-angle-down"></i></h3>
                         <ul className={`filter-list  ${cupFilter && "opened-filter"}`}>
                            {
                                cups.map((cup, index) => (
                                    <li className="filter-item" key={index}> {cup} </li>
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
