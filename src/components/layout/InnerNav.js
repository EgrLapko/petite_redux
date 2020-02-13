import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { navbarLinks } from '../navbarLinks';
import { closeFilters, clearFiltersValues } from '../../redux/filters/filters-actions';

const InnerNav = ({ type, closeFilters , clearFiltersValues }) => {

    const ifType = () => {
        let category

        if(type === "Bras"){category='bra'}
        else if (type === "Panties"){category='panty'}
        else if (type === "Accessories"){category='accessories'}
        else if (type === "Sleepwear"){category='sleepwear'}

        if(type) {
            return (
                navbarLinks.map(link => link.category === category &&
                    <li className={`inner-link ${category === "sleepwear" && "link-small"}`} 
                        key={link.id} 
                        onClick={() => { closeFilters(); clearFiltersValues(); window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) }}>
                        <NavLink to={link.path} activeClassName="link-active"> 
                            {link.text} 
                        </NavLink>
                    </li>
                )
            )
        } 
    };

    return (
        <div className="inner-nav">
            <ul className="inner-links-list">
                { ifType() }
            </ul>   
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    closeFilters: () => dispatch(closeFilters()),
    clearFiltersValues: () => dispatch(clearFiltersValues())
});

export default connect(null, mapDispatchToProps)(InnerNav);