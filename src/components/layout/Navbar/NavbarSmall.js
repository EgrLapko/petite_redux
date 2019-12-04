import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleMobileMenu, dropAllSliders } from '../../../redux/navbar-slider/slider-actions';

import CartIcon from '../../misc/CartIcon';

const NavbarSmall = ({ toggleMobileMenu, dropAllSliders }) => {
    return (
        <div className="navbar-mobile">
            <div className="mobile-menu">
                <p className="hamburger" onClick={() => { toggleMobileMenu(); dropAllSliders() }}>&#9776;</p>
            </div>
            <div className="mobile-logo">
                <Link to="/"><h1 className="logo">petite mamsell</h1></Link>
            </div>
            <div className="mobile-right">
                <CartIcon />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    dropAllSliders: () => dispatch(dropAllSliders())
});

export default connect(null, mapDispatchToProps)(NavbarSmall);
