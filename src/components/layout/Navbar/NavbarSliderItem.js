import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleMobileMenu, dropAllSliders } from '../../../redux/navbar-slider/slider-actions';
import { selectMobileMenuSlider } from '../../../redux/navbar-slider/slider-selector';
import { closeFilters, clearFiltersValues } from '../../../redux/filters/filters-actions';

const NavbarSliderItem = ({ path, image, text, toggleMobileMenu, dropAllSliders, closeFilters, clearFiltersValues, mobileMenuHidden }) => {
    return (
        <React.Fragment>
            <div className="slider-item">
                <div className="image-container">
                    <Link to={path}>
                        <img 
                            className="nav-menu-image" 
                            src={image} alt="menu-item" 
                            onClick={() => { !mobileMenuHidden && toggleMobileMenu(); dropAllSliders(); closeFilters(); clearFiltersValues(); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                        />
                    </Link>   
                </div>
                <div className="bottom-link">
                    <NavLink to={path} 
                            className="nav-menu-title" 
                            activeClassName="link-active" 
                            onClick={() => { !mobileMenuHidden && toggleMobileMenu(); dropAllSliders(); closeFilters(); clearFiltersValues(); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                        <h3>{text}</h3>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
        
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    dropAllSliders: () => dispatch(dropAllSliders()),
    closeFilters: () => dispatch(closeFilters()),
    clearFiltersValues: () => dispatch(clearFiltersValues())
});

const mapStateToProps = createStructuredSelector({
    mobileMenuHidden: selectMobileMenuSlider
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSliderItem);
