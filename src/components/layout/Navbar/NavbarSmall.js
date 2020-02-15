import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleMobileMenu, dropAllSliders } from '../../../redux/navbar-slider/slider-actions';
import { selectMobileMenuSlider } from '../../../redux/navbar-slider/slider-selector';
import { closeFilters, clearFiltersValues } from '../../../redux/filters/filters-actions';
import { selectCartHidden } from '../../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../../redux/cart/cart-actions';
// import { ReactComponent as Logo } from './petiteMamsell.svg';
import mamLogo from './petiteMamsell.png';

import CartIcon from '../../misc/CartIcon';

const NavbarSmall = ({ toggleMobileMenu, dropAllSliders, mobileMenuHidden, closeFilters, clearFiltersValues, cartHidden, toggleCartHidden }) => {

    return (
        <div className="navbar-mobile">
            <div className="mobile-menu">
                <p className="hamburger" onClick={() => { toggleMobileMenu(); dropAllSliders(); !cartHidden && toggleCartHidden() }}>  
                    {mobileMenuHidden ? <>&#9776;</> : <>&#10005;</> } 
                </p>
            </div>

            <div className="mobile-logo" onClick={() => { closeFilters(); clearFiltersValues() }}>
                {/* <Link to="/"><Logo className="logo"/></Link> */}
                <Link to="/"><img src={mamLogo} alt="mamsell" className="logo"/></Link>
            </div>
            <div className="mobile-right">
                <CartIcon />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    mobileMenuHidden: selectMobileMenuSlider,
    cartHidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    dropAllSliders: () => dispatch(dropAllSliders()),
    closeFilters: () => dispatch(closeFilters()),
    clearFiltersValues: () => dispatch(clearFiltersValues()),
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSmall);
