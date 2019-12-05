import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleMobileMenu, dropAllSliders } from '../../../redux/navbar-slider/slider-actions';
import { selectMobileMenuSlider } from '../../../redux/navbar-slider/slider-selector';

import CartIcon from '../../misc/CartIcon';

const NavbarSmall = ({ toggleMobileMenu, dropAllSliders, mobileMenuHidden }) => {
    return (
        <div className="navbar-mobile">
            <div className="mobile-menu">
                <p className="hamburger" onClick={() => { toggleMobileMenu(); dropAllSliders() }}>  {mobileMenuHidden ? <>&#9776;</> : <>&#10005;</> } </p>
            </div>

            <div className="mobile-logo">
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
    dropAllSliders: () => dispatch(dropAllSliders())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSmall);
