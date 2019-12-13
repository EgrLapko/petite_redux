import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleMobileMenu, dropAllSliders } from '../../../redux/navbar-slider/slider-actions';
import { selectMobileMenuSlider } from '../../../redux/navbar-slider/slider-selector';
import { closeFilters, clearFiltersValues } from '../../../redux/filters/filters-actions';

import CartIcon from '../../misc/CartIcon';

const NavbarSmall = ({ toggleMobileMenu, dropAllSliders, mobileMenuHidden, closeFilters, clearFiltersValues }) => {

    function vibrateSimple() {
        navigator.vibrate(200);
    }

    return (
        <div className="navbar-mobile">
            <div className="mobile-menu">
                <p className="hamburger" onClick={() => { toggleMobileMenu(); dropAllSliders(); vibrateSimple() }}>  
                    {mobileMenuHidden ? <>&#9776;</> : <>&#10005;</> } 
                </p>
            </div>

            <div className="mobile-logo" onClick={() => { closeFilters(); clearFiltersValues() }}>
                <Link to="/"><h1 className="logo"><span className="pink">petite</span>.mamsell</h1></Link>
            </div>
            <div className="mobile-right">
                <CartIcon />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    mobileMenuHidden: selectMobileMenuSlider
})

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    dropAllSliders: () => dispatch(dropAllSliders()),
    closeFilters: () => dispatch(closeFilters()),
    clearFiltersValues: () => dispatch(clearFiltersValues())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSmall);
