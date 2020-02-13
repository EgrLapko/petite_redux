import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { toggleMobileMenu, dropAllSliders } from '../../redux/navbar-slider/slider-actions';
import { selectMobileMenuSlider } from '../../redux/navbar-slider/slider-selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';

function CartIcon({ toggleCartHidden, itemCount, toggleMobileMenu, dropAllSliders, mobileMenuHidden }) {
    return (
        <div className="cart-icon" onClick={() => {toggleCartHidden(); !mobileMenuHidden && toggleMobileMenu(); dropAllSliders()}}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> {itemCount} </span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    dropAllSliders: () => dispatch(dropAllSliders())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
    mobileMenuHidden: selectMobileMenuSlider
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
